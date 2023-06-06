import React, { useEffect, useState, useCallback } from "react";
import { getVentures } from "../../../../services/func.service";
import DaisugiTable from "../../../../components/DaisugiTable";
import ReactPaginate from "react-paginate";

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "Investor",
    name: "name",
    align: "left",
  },
  {
    header: "Description",
    name: "description",
    align: "center",
  },
];

const filter = {
  showCount: [25, 50, 100],
};

const Ventures = () => {

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
                src={row?.image}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                alt="Ventures"
              />
              {row?.name}
            </div>,
            <div>{row?.description}</div>,
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
      const data = await getVentures(currentPage + 1, showCountOption);
      drawTable(data);
      console.log(data)
      setIsLoading(false);
    };

    getData();
  }, [currentPage, showCountOption, drawTable]);

  return (
    <div>
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
  )
}

export default Ventures