import React, { useState, useEffect } from "react";

// Table header width
const columnWidths = {
  rank: "5%",
  name: "20%",
  price: "20%",
  hourlyChanged: "10%",
  dailyChanged: "10%",
  weeklyChanged: "10%",
  monthlyChanged: "10%",
  quarterlyChanged: "10%",
  yearlyChanged: "10%",
};

const headerTextPosition = {
  "#": "text-right",
  "Name": "text-left",
  "Price": "text-right",
  "1H %": "text-center",
  "24H %": "text-center",
  "7D %": "text-center",
  "1M %": "text-center",
  "3M %": "text-center",
  "1Y %": "text-center",
};

// Table Headers
const CoinTableHeader = [
  { header: "#", columnName: "rank" },
  { header: "Name", columnName: "name" },
  { header: "Price", columnName: "price" },
  { header: "1H %", columnName: "hourlyChanged" },
  { header: "24H %", columnName: "dailyChanged" },
  { header: "7D %", columnName: "weeklyChanged" },
  { header: "1M %", columnName: "monthlyChanged" },
  { header: "3M %", columnName: "quarterlyChanged" },
  { header: "1Y %", columnName: "yearlyChanged" },
];

const formatPrice = (price)  => {
  const num = parseFloat(price);
  if (num !== 0) {
    let decimalCount = num;
    if (num >= 1) {
      decimalCount = num.toFixed(2);
    } else {
      let temp = num;
      let precision = 0;
      while (temp < 1) {
        temp *= 10;
        precision++;
      }
      decimalCount = num.toFixed(precision + 4);
    }
    return '$' + decimalCount;
  } else {
    return '$0.00';
  }
}

const showChangePercent = (change) => {
  return ((change - 1) * 100).toFixed(2);
}

const Table = (props) => {
  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState([]);

  const sortTableData = (data) => {
    // if (!sortBy) {
    //   return data;
    // }

    const sortedData = [...data].sort((a, b) => {
      const sortOrder = sortAsc ? -1 : 1;
      // If the table header is not name, sort by integer
      // if (sortBy === "volatility") {
      //   const valueA = parseFloat(a[sortBy][0]?.volatility60 ?? 0);
      //   const valueB = parseFloat(b[sortBy][0]?.volatility60 ?? 0);
      //   if (valueA < valueB) return -sortOrder;
      //   if (valueA > valueB) return sortOrder;
      //   return 0;
      // }
      // else if (sortBy === "largeTxs") {
      //   const valueA = parseFloat(a[sortBy][0]?.adjustedCount ?? 0);
      //   const valueB = parseFloat(b[sortBy][0]?.adjustedCount ?? 0);
      //   if (valueA < valueB) return -sortOrder;
      //   if (valueA > valueB) return sortOrder;
      //   return 0;
      // }
      // else if (sortBy === "inOutOfTheMoneyHistory" || sortBy === "breakEvenPriceHistory") {
      //   const valueA = parseFloat(a[sortBy][0]?.inPercentage ?? 0);
      //   const valueB = parseFloat(b[sortBy][0]?.inPercentage ?? 0);
      //   if (valueA < valueB) return -sortOrder;
      //   if (valueA > valueB) return sortOrder;
      //   return 0;
      // }
      // else if (sortBy === "name") {
      //   if (a[sortBy] < b[sortBy]) return -sortOrder;
      //   if (a[sortBy] > b[sortBy]) return sortOrder;
      //   return 0;
      // }
      // else {
      //   const valueA = parseFloat(a[sortBy]);
      //   const valueB = parseFloat(b[sortBy]);
      //   if (valueA < valueB) return -sortOrder;
      //   if (valueA > valueB) return sortOrder;
      //   return 0;
      // }
    });

    return sortedData;
  };

  // Sort the table function
  const handleSort = (column) => {  
    if (column === sortBy) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(column); 
      setSortAsc(true);
    }
  };

  useEffect(() => {
    // Sort and set the table data
    // if (JSON.stringify(tableData) !== JSON.stringify(props.CoinData)) {
    console.log("1221")
    setTableData(props.CoinData);
    // console.log(props.CoinData)
    // }
  }, [props.CoinData, sortBy, sortAsc]);

  return (
    <div className="h-auto overflow-x-auto">
      <table className="mx-auto whitespace-nowrap w-[100%]">
        <thead>
          <tr className="text-white">
            {CoinTableHeader.map(({ header, columnName }, index) => {
              return (
                <th
                  key={index}
                  className={`${headerTextPosition[header]} px-4 border-b border-slate-800 pb-6 cursor-pointer select-none text-[14px] w-[${columnWidths[columnName]}]`}
                  onClick={() => {
                    handleSort(columnName);
                  }}
                >
                  {sortBy === columnName && (sortAsc ? " ▼" : " ▲")} {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((data, index) => (
              <tr key={index} className="text-white border-b border-slate-800">
                <td className="p-6 text-right">{data.rank && data.rank}</td>
                <td className="p-6 px-4 flex items-center">
                  <div>
                    <img src={data.imgURL && data.imgURL} className="h-6 w-6"  alt="CoinLogo" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{data.name}</div>
                  </div>
                </td>
                <td className="px-4 text-right">
                  {data.price ? formatPrice(data.price) : '$0.00'}
                </td>
                <td className={`px-4 text-center ${data.hourlyChanged && data.hourlyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.hourlyChanged ? showChangePercent(data.hourlyChanged) : 0}%
                </td>
                <td className={`px-4 text-center ${data.dailyChanged && data.dailyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.dailyChanged ? showChangePercent(data.dailyChanged) : 0}%
                </td>
                <td className={`px-4 text-center ${data.weeklyChanged && data.weeklyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.weeklyChanged ? showChangePercent(data.weeklyChanged) : 0}%
                </td>
                <td className={`px-4 text-center ${data.monthlyChanged && data.monthlyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.monthlyChanged ? showChangePercent(data.monthlyChanged) : 0}%
                </td>
                <td className={`px-4 text-center ${data.quarterlyChanged && data.quarterlyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.quarterlyChanged ? showChangePercent(data.quarterlyChanged) : 0}%
                </td>
                <td className={`px-4 text-center ${data.yearlyChanged && data.yearlyChanged < 1 ? "text-red-500" : "text-green-500"}`}>
                  {data.yearlyChanged ? showChangePercent(data.yearlyChanged) : 0}%
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
