import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../config/constants";
import { normalPercentFormat, marketCapFormat } from "../../utils/format";
import ConexioTable from "../ConexioTable";
import ReactPaginate from "react-paginate";
import ImageWithFallback from "../ImageWithFallback";

const columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Protocol",
    name: "name",
    align: "left",
  },
  {
    header: "Chain",
    name: "chain",
    align: "center",
  },
  {
    header: "Chains",
    name: "chains",
    align: "right",
  },
  {
    header: "1h %",
    name: "change_1h",
    align: "center",
  },
  {
    header: "1d %",
    name: "change_1d",
    align: "center",
  },
  {
    header: "7d %",
    name: "change_7d",
    align: "center",
  },
  {
    header: "Tvl",
    name: "tvl",
    align: "right",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const Protocols = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({});

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `${API_BASE}/defi/getprotocol?page=${
        currentPage + 1
      }}&pageSize=${showCountOption}`
    );
    drawTable(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [showCountOption, currentPage]);

  const drawTable = (data) => {
    let newData = {
      columns,
      rows: [],
      totalPages: 0,
    };
    if (data.data.length) {
      data.data.map((row, key) => {
        newData.rows.push([
          showCountOption * currentPage + (key + 1),
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
          <div className={`text-[${row.change_1d > 0 ? '#80FF9C' : '#FF8080'}]`}>
            {
              normalPercentFormat(row.change_1h)
            }
          </div>,
          <div className={`text-[${row.change_1d > 0 ? '#80FF9C' : '#FF8080'}]`}>
            {
              normalPercentFormat(row.change_1d)
            }
          </div>,
          <div className={`text-[${row.change_1d > 0 ? '#80FF9C' : '#FF8080'}]`}>
            {
              normalPercentFormat(row.change_7d)
            }
          </div>,
          marketCapFormat(row.tvl),
        ]);
      });
    }
    newData.totalPages = data.totalPages;
    setTableData(newData);
  };

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
        <ConexioTable tableData={tableData} isLoading={isLoading} />
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

export default Protocols;
