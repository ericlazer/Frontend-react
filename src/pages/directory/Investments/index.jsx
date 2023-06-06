import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import { marketCapFormat, truncateString } from "../../../utils/format";
import { getInvestments } from "../../../services/func.service";
import DaisugiTable from "../../../components/DaisugiTable";
import ReactPaginate from "react-paginate";

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "Name",
    name: "name",
    align: "center",
  },
  {
    header: "Date",
    name: "date",
    align: "right",
  },
  {
    header: "Raised",
    name: "amount_raised",
    align: "right",
  },
  {
    header: "Round",
    name: "round",
    align: "right",
  },
  {
    header: "Description",
    name: "description",
    align: "left",
  },
  {
    header: "Investor",
    name: "lead_investor",
    align: "center",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const Investments = () => {
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
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>{row?.name}</div>
            </a>,
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>{row?.date}</div>
            </a>,
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>
                {row?.amount_raised
                  ? isNaN(Number(row?.amount_raised))
                    ? 0
                    : marketCapFormat(Number(row?.amount_raised))
                  : 0
                }
              </div>
            </a>,
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>{row?.round}</div>
            </a>,
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>{truncateString(row?.description, 40)}</div>
            </a>,
            <a href={row?.source} target="_blank" rel="noopener noreferrer">
              <div>{truncateString(row?.lead_investor?.replace(/\+/g, ','), 30)}</div>
            </a>,
          ]);
        });
      }
      newData.totalPages = data.totalPages;
      setTableData(newData);
    },
    [showCountOption, currentPage]
  );

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
      const data = await getInvestments(currentPage + 1, showCountOption);
      drawTable(data);
      console.log(data)
      setIsLoading(false);
    };

    getData();
  }, [currentPage, showCountOption, drawTable]);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Investments;
