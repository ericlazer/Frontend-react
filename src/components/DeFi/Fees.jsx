import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../../config/constants";
import { marketCapFormat } from "../../utils/format";
import DaisugiTable from "../DaisugiTable";
import ReactPaginate from "react-paginate";
import ImageWithFallback from "../ImageWithFallback";
import { chainImages } from "../../data/chain";

const columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Name",
    name: "name",
    align: "left",
  },
  {
    header: "Category",
    name: "category",
    align: "center",
  },
  {
    header: "Chain",
    name: "chain",
    align: "right",
  },
  {
    header: "Chains",
    name: "chains",
    align: "right",
  },
  {
    header: "Daily Fees",
    name: "dailyFees",
    align: "right",
  },
  {
    header: "Daily Revenue",
    name: "dailyRevenue",
    align: "right",
  },
  {
    header: "TVL",
    name: "tvl",
    align: "right",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const Fees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({});
  const responseData = useRef({ totalPages: 0, data: [] });
  const expendView = useRef(-1);

  const handleExpendView = useCallback((rowIndex) => {
    expendView.current = expendView.current === rowIndex ? -1 : rowIndex;
    drawTable(responseData.current.data, expendView.current);
  }, []);

  const drawTable = useCallback(
    (data, expend) => {
      let newData = {
        columns,
        rows: [],
        totalPages: 0,
      };

      if (data && data.length) {
        data.forEach((row, rowIndex) => {
          newData.rows.push([
            showCountOption * currentPage + (rowIndex + 1),
            <div className="flex gap-4 items-center">
              <ImageWithFallback
                src={row.logo}
                fallback="/img/CoinImages/blank.png"
                className="rounded-full w-7"
              />
              {row.name}
            </div>,
            row.category,
            row.chain,
            <div className="relative w-full h-full">
              <div className="flex gap-1 w-5">
                {row.chains
                  .filter((_, key) => key < 3)
                  .map((chain, key) => (
                    <ImageWithFallback
                      key={key}
                      className="w-5 mr-2"
                      src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${
                        chainImages[chain.toLowerCase()]
                      }`}
                      fallback="/img/CoinImages/blank.png"
                      alt="Chain"
                    />
                  ))}
              </div>
              {row.chains.length > 3 ? (
                <>
                  <Link
                    className="text-yellow-500"
                    onClick={() => handleExpendView(rowIndex)}
                  >
                    more +{row.chains.length - 3}
                  </Link>
                  {expend === rowIndex ? (
                    <div className="absolute flex flex-wrap w-[200px] top-0 right-0 p-3 translate-x-[calc(100%+20px)] bg-[#323232] rounded z-10">
                      {row.chains
                        .filter((_, key) => key >= 3)
                        .map((chain, key) => (
                          <ImageWithFallback
                            key={key}
                            className="w-5 mr-2"
                            src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${
                              chainImages[chain.toLowerCase()]
                            }`}
                            fallback="/img/CoinImages/blank.png"
                            alt="Chain"
                          />
                        ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>,
            marketCapFormat(row.dailyFees),
            marketCapFormat(row.dailyRevenue),
            marketCapFormat(row.tvl),
          ]);
        });
      }
      newData.totalPages = data.totalPages;
      console.log(newData);
      setTableData(newData);
    },
    [showCountOption, currentPage]
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${API_BASE}/defi/getfee?page=${
        currentPage + 1
      }}&pageSize=${showCountOption}`
    );
    responseData.current = response.data;

    expendView.current = -1;
    drawTable(responseData.current.data, expendView.current);
    setIsLoading(false);
  }, [showCountOption, currentPage, drawTable]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelectOption = (event, selectType) => {
    const { value } = event.target;
    switch (selectType) {
      case "showCount":
        setShowCountOption(value);
        break;
      default:
        break;
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log(selectedPage);
    setCurrentPage(selectedPage);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end mr-5">
        <select
          className="ml-5 px-8 py-3 rounded bg-gradient-btn text-white"
          onChange={(event) => handleSelectOption(event, "showCount")}
        >
          {filter.showCount.map((item, key) => {
            return (
              <option key={key} className="bg-[#313131]" value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-5 overflow-x-auto overflow-y-hidden">
        <DaisugiTable tableData={tableData} isLoading={isLoading} />
        <ReactPaginate
          pageCount={tableData.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-end mt-8 pagination"}
          pageClassName="h-[33px]"
          pageLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          previousLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          nextLinkClassName="px-4 py-2 border-2 border-solid border-[#212121] rounded-md bg-[#323232] text-white hover:brightness-125"
          breakLinkClassName="mx-1 text-white items-center flex"
          activeLinkClassName={"bg-blue-700 active"}
          disabledLinkClassName="brightness-75 hover:brightness-75 hover:cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default Fees;
