import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DaisugiTable from "../DaisugiTable";
import { API_BASE } from "../../config/constants";
import ImageWithFallback from "../ImageWithFallback";
import { marketCapFormat, normalPercentFormat } from "../../utils/format";
import { chainImages } from "../../data/chain";

const filter = {
  showCount: [25, 50, 100],
};

let columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Yield",
    name: "project",
    align: "left",
  },
  {
    header: "Chain",
    name: "chain",
    align: "left",
  },
  {
    header: "Tvl",
    name: "tvlUsd",
    align: "left",
  },
  {
    header: "APY",
    name: "apy",
    align: "left",
  },
  {
    header: "APY Pct 1D",
    name: "apyPct1D",
    align: "left",
  },
  {
    header: "APY Pct 7D",
    name: "apyPct7D",
    align: "left",
  },
  {
    header: "APY Pct 30D",
    name: "apyPct30D",
    align: "left",
  },
  {
    header: "Prediction",
    name: "predictions",
    align: "left",
  },
];

const Yields = () => {
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [currentPage, setCurrentPage] = useState(0);
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
            <div className="flex items-center gap-4">
              {row.symbol && (
                <ImageWithFallback
                  src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${row.symbol.toLowerCase()}.png`}
                  fallback="/img/CoinImages/blank.png" // Replace this with the path to your fallback image
                  alt={row.symbol}
                  className="rounded-full"
                />
              )}
              {row.symbol}
            </div>,
            <div className="flex items-center gap-4">
              <img
                src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${
                  chainImages[row.chain.toLowerCase()]
                }`}
                alt={row.chain}
              />
              {row.chain}
            </div>,
            marketCapFormat(row.tvlUsd),
            normalPercentFormat(row.apy),
            normalPercentFormat(row.apyPct1D),
            normalPercentFormat(row.apyPct7D),
            normalPercentFormat(row.apyPct30D),
            normalPercentFormat(row.predictions.predictedClass),
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
      `${API_BASE}/defi/getyield?page=${
        currentPage + 1
      }&pageSize=${showCountOption}`
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
      <div className="mt-5">
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

export default Yields;
