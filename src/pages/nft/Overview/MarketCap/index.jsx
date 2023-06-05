import React, { useEffect, useState, useCallback } from "react";
import { getNFTMarketCap } from "../../../../services/nft.service";
import {
  coinPriceFormat,
  marketCapFormat,
  numberFormat,
} from "../../../../utils/format";
import { Link } from "react-router-dom";
import DaisugiTable from "../../../../components/DaisugiTable";
import ImageWithFallback from "../../../../components/ImageWithFallback";
import ReactPaginate from "react-paginate";

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "Name",
    name: "contract_name",
    align: "left",
  },
  {
    header: "Items",
    name: "items_total",
    align: "right",
  },
  {
    header: "Market Cap",
    name: "market_cap",
    align: "right",
  },
  {
    header: "Average Price",
    name: "average_market_price",
    align: "right",
  },
  {
    header: "Contract",
    name: "contract_address",
    align: "left",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const MarketCap = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({});

  const drawTable = useCallback((data) => {
    let newData = {
      columns,
      rows: [],
      totalPages: 0,
    };

    if (data.length) {
      // Get data range
      const start = currentPage * showCountOption;
      const end = (currentPage + 1) * showCountOption;

      console.log(start, end, currentPage);
      const pageData = data.slice(start, end);
    
      pageData.forEach((row, key) => {
        newData.rows.push([
          showCountOption * currentPage + (key + 1),
          <div>
            {
              row.logo_url ? 
              <ImageWithFallback
                src={row.logo_url}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                fallback="/img/CoinImages/blank.png"
                alt="CoinIcon"
                /> :
              <img
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                src="/img/CoinImages/blank.png"
                alt="Blank Coin"
              />
            }
            {row.contract_name}
          </div>,
          <div>{numberFormat(row.items_total)}</div>,
          <div>{marketCapFormat(row.market_cap)}</div>,
          <div>{coinPriceFormat(row.average_market_price)}</div>,
          <Link onClick={(event) => {
            event.preventDefault();
            window.open(`https://etherscan.io/address/${row.contract_address}`);
          }}>
            <div>{coinPriceFormat(row.average_market_price)}</div>
          </Link>,
        ]);
      });
    }
    newData.totalPages = data.length / showCountOption;
    setTableData(newData);
  }, [currentPage, showCountOption]);

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
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTMarketCap();
      drawTable(data);
      setIsLoading(false);
    };

    getData();
  }, [showCountOption, currentPage, drawTable]);

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

export default MarketCap;
