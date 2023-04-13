import React, { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';

// Table header width
const columnWidths = {
  id: "50px",
  name: "250px",
  marketCap: "200px",
  price: "100px",
  dailyChanged: "150px",
  inOutMoney: "200px",
  breakEvenPrice: "100px",
  volatility: "100px",
  largeTxs: "100px",
  volume: "200px",
};

const headerTextPosition = {
  "#": "text-right",
  "Name": "text-left",
  "Market Cap": "text-right",
  "Price": "text-right",
  "24h %": "text-right",
  "In & Out of the Money": "text-center",
  "Break Even Price": "text-center",
  "Volatility": "text-center",
  "Large Txs(24h)": "text-center",
  "Volume (24h)": "text-right",
};

// Table Headers
const CoinTableHeader = [
  { header: "#", columnName: "rank" },
  { header: "Name", columnName: "name" },
  { header: "Market Cap", columnName: "marketCap" },
  { header: "Price", columnName: "price" },
  { header: "24h %", columnName: "dailyChanged" },
  { header: "In & Out of the Money", columnName: "inOutOfTheMoneyHistory" },
  { header: "Break Even Price", columnName: "breakEvenPriceHistory" },
  { header: "Volatility", columnName: "volatility" },
  { header: "Large Txs(24h)", columnName: "largeTxs" },
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

const ProgressBar = ({ inPercentage, outPercentage }) => {
  const inStyle = {
    width: `${inPercentage * 100}%`,
    background: "#FF4848",
    color: "#FFF",
  };

  const outStyle = {
    width: `${outPercentage * 100}%`,
    background: "#4CAF50",
    color: "#FFF",
  };

  return (
    <div className="relative bg-gray-200 h-3">
      <div
        className="absolute top-0 left-0 h-full"
        style={inStyle}
      ></div>
      <div
        className="absolute top-0 right-0 h-full"
        style={outStyle}
      ></div>
    </div>
  );
};

const Table = (props) => {
  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState([]);

  // Get maxium values for marketcap and volume
  const maxMarketCap =
    tableData &&
    tableData.reduce((max, data) => {
      return Math.max(max, data.marketCap);
    }, 0);

  const maxVolume =
    tableData &&
    tableData.reduce((max, data) => {
      return Math.max(max, data.volume);
    }, 0);

  const sortTableData = (data) => {
    // if (!sortBy) {
    //   return data;
    // }

    const sortedData = [...data].sort((a, b) => {
      const sortOrder = sortAsc ? -1 : 1;
      // If the table header is not name, sort by integer
      if (sortBy === "volatility") {
        const valueA = parseFloat(a[sortBy][0]?.volatility60 ?? 0);
        const valueB = parseFloat(b[sortBy][0]?.volatility60 ?? 0);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      }
      else if (sortBy === "largeTxs") {
        const valueA = parseFloat(a[sortBy][0]?.adjustedCount ?? 0);
        const valueB = parseFloat(b[sortBy][0]?.adjustedCount ?? 0);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      }
      else if (sortBy === "inOutOfTheMoneyHistory" || sortBy === "breakEvenPriceHistory") {
        const valueA = parseFloat(a[sortBy][0]?.inPercentage ?? 0);
        const valueB = parseFloat(b[sortBy][0]?.inPercentage ?? 0);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      }
      else if (sortBy === "name") {
        if (a[sortBy] < b[sortBy]) return -sortOrder;
        if (a[sortBy] > b[sortBy]) return sortOrder;
        return 0;
      }
      else {
        const valueA = parseFloat(a[sortBy]);
        const valueB = parseFloat(b[sortBy]);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
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
    // Sort and set the table data
    // if (JSON.stringify(tableData) !== JSON.stringify(props.CoinData)) {
    setTableData(sortTableData(props.CoinData));
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
          {props.loading ? (
            <>
              {/* Skeleton for 10 rows */}
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="text-white border-b border-slate-800">
                  <td className="p-6 text-right">
                    <Skeleton width={30} height={40} style={{backgroundColor: 'gray'}} />
                  </td>
                  <td className="p-6 px-4 flex items-center">
                    <div>
                      <Skeleton variant="circular" height={24} width={24} style={{backgroundColor: 'gray'}} />
                    </div>
                    <div className="ml-4">
                      <Skeleton width={200} height={40} style={{backgroundColor: 'gray'}} />
                    </div>
                  </td>
                  <td className="px-4 text-right">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}} />
                  </td>
                  <td className="px-4 text-right">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-right">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-center">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-center">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-center">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-center">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                  <td className="px-4 text-right">
                    <Skeleton width="100%" height={40} style={{backgroundColor: 'gray'}}/>
                  </td>
                </tr>
              ))}
            </>
          ) : <>
            {tableData &&
              tableData.map((data, index) => (
                <tr key={index} className="text-white border-b border-slate-800">
                  <td className="p-6 text-right">{data.rank && data.rank}</td>
                  <td className="p-6 px-4 flex items-center">
                    <div>
                      <img src={data.imgURL && data.imgURL} className="h-6 w-6" alt="CoinLogo" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">{data.name}</div>
                    </div>
                  </td>
                  <td className="px-4 text-right">
                    ${data.marketCap ? formatNumber(data.marketCap) : '0.00'}
                    <div className="h-2 bg-gray-300 mt-2">
                      <div
                        className="h-full bg-green-500"
                        style={{
                          width: `${calculatePercentage(
                            data.marketCap ? data.marketCap : 0,
                            maxMarketCap
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 text-right">
                    {data.price ? parseFloat(data.price).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    }) : '$0.00'}
                  </td>
                  <td className="px-4 text-right">
                    {data.dailyChanged ? data.dailyChanged.toFixed(2) : 0}%
                  </td>
                  <td className="px-4 text-center">
                    {(data.inOutOfTheMoneyHistory.length > 0) ? (
                      <ProgressBar inPercentage={data.inOutOfTheMoneyHistory[0].inPercentage} outPercentage={data.inOutOfTheMoneyHistory[0].outPercentage} />
                    ) : ("No Info")}
                  </td>
                  <td className="px-4 text-center">
                    {(data.breakEvenPriceHistory.length > 0) ? (
                      <ProgressBar inPercentage={data.breakEvenPriceHistory[0].inPercentage} outPercentage={data.breakEvenPriceHistory[0].outPercentage} />
                    ) : ("No Info")}
                  </td>
                  <td className="px-4 text-center">
                    {data.volatility.length > 0 ? `${(data.volatility[0].volatility60 * 100).toFixed(2)}%` : "0%"}
                  </td>
                  <td className="px-4 text-center">
                    {data.largeTxs.length > 0 ? data.largeTxs[data.largeTxs.length - 1].adjustedCount : 0}
                  </td>
                  <td className="px-4 text-right">
                    ${data.volume ? formatNumber(data.volume) : '0.00'}
                    <div className="h-2 bg-gray-300 mt-2">
                      <div
                        className="h-full bg-blue-500"
                        style={{
                          width: `${calculatePercentage(data.volume, maxVolume)}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
          </>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
