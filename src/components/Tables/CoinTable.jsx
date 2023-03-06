import React, { useState, useEffect } from "react";

// Table header width
const columnWidths = {
  id: "50px",
  name: "250px",
  price: "200px",
  hourlyChanged: "150px",
  dailyChanged: "150px",
  weeklyChanged: "150px",
  marketCap: "200px",
  volume: "200px",
};

// Table Headers
const CoinTableHeader = [
  { header: "#", columnName: "id" },
  { header: "Name", columnName: "name" },
  { header: "Price", columnName: "price" },
  { header: "1h %", columnName: "hourlyChanged" },
  { header: "24h %", columnName: "dailyChanged" },
  { header: "7d %", columnName: "weeklyChanged" },
  { header: "Market Cap", columnName: "marketCap" },
  { header: "Volume (24h)", columnName: "volume" },
];

// Format number for biggest number
const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else {
    return num.toFixed(2);
  }
};

const calculatePercentage = (value, max) => {
  return (value / max) * 100;
};

const Table = (props) => {
  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState([]);

  // Get maxium values for marketcap and volume
  const maxMarketCap = tableData.reduce((max, data) => {
    return Math.max(max, data.marketCap);
  }, 0);
  
  const maxVolume = tableData.reduce((max, data) => {
    return Math.max(max, data.volume);
  }, 0);

  const sortTableData = (data) => {
    if (!sortBy) {
      return data;
    }

    const sortedData = [...data].sort((a, b) => {
      const sortOrder = sortAsc ? -1 : 1;

      // If the table header is not name, sort by integer
      if (sortBy !== "name") {
        const valueA = parseFloat(a[sortBy]);
        const valueB = parseFloat(b[sortBy]);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      } else {
        if (a[sortBy] < b[sortBy]) return -sortOrder;
        if (a[sortBy] > b[sortBy]) return sortOrder;
        return 0;
      }
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
    setTableData(sortTableData(props.CoinData));
    console.log(props.CoinData);
  }, [props.CoinData, sortBy, sortAsc]);

  return (
    <table className="mx-auto">
      <thead>
        <tr className="text-white">
          {CoinTableHeader.map(({ header, columnName }, index) => {
            return (
              <th
                key={index}
                className={`${
                  header === "Name" ? "text-left" : "text-right"
                } px-4 border-b border-slate-800 pb-6 cursor-pointer select-none text-[14px] w-[${
                  columnWidths[columnName]
                }]`}
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
        {tableData.map((data, index) => (
          <tr key={index} className="text-white border-b border-slate-800">
            <td className="p-6 text-right">{data.id}</td>
            <td className="p-6 px-4 flex items-center">
              <div>
                <img src={data.imgURL} className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <div className="font-semibold">{data.name}</div>
              </div>
            </td>
            <td className="px-4 text-right">
              {parseFloat(data.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td className="px-4 text-right">
              {data.hourlyChanged.toFixed(2)}%
            </td>
            <td className="px-4 text-right">{data.dailyChanged.toFixed(2)}%</td>
            <td className="px-4 text-right">
              {data.weeklyChanged.toFixed(2)}%
            </td>
            <td className="px-4 text-right">
              ${formatNumber(data.marketCap)}
              <div className="h-2 bg-gray-300 mt-2">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${calculatePercentage(data.marketCap, maxMarketCap)}%` }}
                ></div>
              </div>
            </td>
            <td className="px-4 text-right">
              ${formatNumber(data.volume)}
              <div className="h-2 bg-gray-300 mt-2">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${calculatePercentage(data.volume, maxVolume)}%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
