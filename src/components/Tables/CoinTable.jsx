import React, { useState, useMemo } from "react";
import { CoinTableHeader } from "../../config/TableHeaders";
import { data } from "autoprefixer";

const columnMap = {
  "#": "id",
  "1h %": "hourlyChange",
  "24h %": "dailyChange",
  "7d %": "weeklyChange",
};

const Table = (props) => {
  const { CoinData } = props;

  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState(CoinData);

  const sortByColumn = (column) => {

    const sortOrder = (sortBy === column ? !sortAsc : false) ? 1 : -1;

    // Extract the data to remove special characters. For e.g, '$', '%'
    const preprocessedData = tableData.map((data) => {
      if (
        column === "hourlyChange" ||
        column === "dailyChange" ||
        column === "weeklyChange"
      ) {
        // Get the number from string.
        var extractedNumber = data[column].replace("%", "");
        return { ...data, [column]: extractedNumber };
      } else {
        return data;
      }
    });

    // Sort the data by it's column
    const sortedData = [...preprocessedData].sort((a, b) => {
      if (
        column === "id" ||
        column === "price" ||
        column === "hourlyChange" ||
        column === "dailyChange" ||
        column === "weeklyChange"
      ) {
        // In these columns, compare by integer. Not string
        const valueA = parseFloat(a[column]);
        const valueB = parseFloat(b[column]);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      } else {
        if (a[column] < b[column]) return -sortOrder;
        if (a[column] > b[column]) return sortOrder;
        return 0;
      }
    });

    // Set the data to show in the table
    setTableData(sortedData);
    setSortBy(column);
    setSortAsc(sortBy === column ? !sortAsc : false);
  };

  return (
    <table className="">
      <thead>
        <tr className="text-white">
          {CoinTableHeader.map((header, index) => {

            const columnName = columnMap[header.toLowerCase()] || header.toLowerCase();
            
            return (
              <th
                key={index}
                className={`${
                  header === "Name" ? "text-left" : "text-right"
                } px-4 border-b border-slate-800 pb-6 cursor-pointer select-none text-[14px] w-[60px]`}
                onClick={() => {
                  sortByColumn(columnName);
                }}
              >
                {sortBy === columnName && (sortAsc ? " ▲" : " ▼")} {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index} className="text-white border-b border-slate-800">
            <td className="p-6 w-[50px] px-4 text-right">{data.id}</td>
            <td className="w-[300px] px-4">{data.name}</td>
            <td className="w-[100px] px-4 text-right">
              {parseFloat(data.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td className="w-[100px] px-4 text-right">{data.hourlyChange}%</td>
            <td className="w-[100px] px-4 text-right">{data.dailyChange}%</td>
            <td className="w-[100px] px-4 text-right">{data.weeklyChange}%</td>
            <td className="w-[200px] px-4 text-right">{data.marketCap}</td>
            <td className="w-[200px] px-4 text-right">{data.volume}</td>
            <td className="w-[200px] px-4 text-right">{data.lastSevenDays}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
