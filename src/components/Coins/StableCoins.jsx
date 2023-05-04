import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { API_BASE } from "../../config/constants";
import { coinPriceFormat, marketCapFormat } from "../../utils/format";
import DaisugiTable from "../DaisugiTable";
import ReactPaginate from "react-paginate";

const columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Coin",
    name: "coin",
    align: "left",
  },
  {
    header: "Name",
    name: "name",
    align: "center",
  },
  {
    header: "Price",
    name: "price",
    align: "right",
  },
  {
    header: "Market Cap",
    name: "marketcup",
    align: "right",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const StableCoins = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({});

  const drawTable = useCallback(
    (data) => {
      let newData = {
        columns,
        rows: [],
        totalPages: 0,
      };
      if (data.data.length) {
        data.data.forEach((row, key) => {
          newData.rows.push([
            showCountOption * currentPage + (key + 1),
            <div>
              <img
                src={row.imgURL}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3"
                alt="CoinIcon"
              />
              {row.symbol}
            </div>,
            row.name,
            coinPriceFormat(row.price),
            marketCapFormat(row.marketCap),
          ]);
        });
      }
      newData.totalPages = data.totalPages;
      setTableData(newData);
    },
    [showCountOption, currentPage]
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${API_BASE}/coin/stablecoins?page=${
        currentPage + 1
      }}&pageSize=${showCountOption}`
    );
    drawTable(response.data);
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

export default StableCoins;
