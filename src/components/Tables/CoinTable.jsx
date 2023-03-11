import React, { useState, useEffect } from "react";
import { coinService } from "../../services/coin.service";
import { selectCoinInfo } from "../../redux/coinInfoReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCoinInfomration } from "../../redux/coinInfoReducer";

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
  { header: "#", columnName: "id" },
  { header: "Name", columnName: "name" },
  { header: "Market Cap", columnName: "marketCap" },
  { header: "Price", columnName: "price" },
  { header: "24h %", columnName: "dailyChanged" },
  { header: "In & Out of the Money", columnName: "moneyIn" },
  { header: "Break Even Price", columnName: "breakIn" },
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
    <div className="relative bg-gray-200 rounded-md h-3">
      <div
        className="absolute top-0 left-0 h-full rounded-l-md"
        style={inStyle}
      ></div>
      <div
        className="absolute top-0 right-0 h-full rounded-r-md"
        style={outStyle}
      ></div>
    </div>
  );
};

const Table = (props) => {
  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const coinInfo = useSelector(selectCoinInfo);

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
      if (sortBy !== "name") {
        const valueA = parseFloat(a[sortBy]);
        const valueB = parseFloat(b[sortBy]);
        if (valueA < valueB) return -sortOrder;
        if (valueA > valueB) return sortOrder;
        return 0;
      }
      else {
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
    // Sort and set the table data
    // if (JSON.stringify(tableData) !== JSON.stringify(props.CoinData)) {

    const newData = props.CoinData.map((item, index) => ({
      ...item,
      volatility: (coinInfo[index] && coinInfo[index].coins[0].volatility[coinInfo[index].coins[0].volatility.length - 1]) ? (coinInfo[index].coins[0].volatility[coinInfo[index].coins[0].volatility.length - 1].volatility60).toFixed(2) : 0,
      largeTxs: (coinInfo[index] && coinInfo[index].coins[0].largeTxs[coinInfo[index].coins[0].largeTxs.length - 1]) ? coinInfo[index].coins[0].largeTxs[coinInfo[index].coins[0].largeTxs.length - 1].adjustedCount : 0,
      moneyIn: (coinInfo[index] && coinInfo[index].coins[0].inOutOfTheMoneyHistory[coinInfo[index].coins[0].inOutOfTheMoneyHistory.length - 1]) ? (coinInfo[index].coins[0].inOutOfTheMoneyHistory[coinInfo[index].coins[0].inOutOfTheMoneyHistory.length - 1].inPercentage).toFixed(2) : 0,
      moneyOut: (coinInfo[index] && coinInfo[index].coins[0].inOutOfTheMoneyHistory[coinInfo[index].coins[0].inOutOfTheMoneyHistory.length - 1]) ? (coinInfo[index].coins[0].inOutOfTheMoneyHistory[coinInfo[index].coins[0].inOutOfTheMoneyHistory.length - 1].outPercentage).toFixed(2) : 0,
      breakIn: (coinInfo[index] && coinInfo[index].coins[0].breakEvenPriceHistory[coinInfo[index].coins[0].breakEvenPriceHistory.length - 1]) ? (coinInfo[index].coins[0].breakEvenPriceHistory[coinInfo[index].coins[0].breakEvenPriceHistory.length - 1].inPercentage).toFixed(2) : 0,
      breakOut: (coinInfo[index] && coinInfo[index].coins[0].breakEvenPriceHistory[coinInfo[index].coins[0].breakEvenPriceHistory.length - 1]) ? (coinInfo[index].coins[0].breakEvenPriceHistory[coinInfo[index].coins[0].breakEvenPriceHistory.length - 1].outPercentage).toFixed(2) : 0,
      // intotheBlockDataResults: coinInfo[index],
    }));
    setTableData(sortTableData(newData));

    // console.log("3q2hq23h2q3hj32j");
    // }
  }, [props.CoinData, sortBy, sortAsc]);

  useEffect(() => {
    const fetchData = async (data) => {
      const intotheBlockDataPromises = data.map(async (coin) => {
        return await coinService.getIntheBlockCoinData(coin.name);
      });

      try {
        const intotheBlockDataResults = await Promise.all(
          intotheBlockDataPromises.filter((p) => p)
        );

        dispatch(setCoinInfomration(intotheBlockDataResults));
      } catch (err) {
        console.log(err);
      }
    };

    if (props.CoinData.length > 0 && !flag) {
      setFlag(true);
      fetchData(props.CoinData);
    }
  }, [props.CoinData]);

  return (
    <table className="mx-auto">
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
        { console.log(tableData)}
        {tableData &&
          tableData.map((data, index) => (
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
                ${formatNumber(data.marketCap)}
                <div className="h-2 bg-gray-300 mt-2">
                  <div
                    className="h-full bg-green-500"
                    style={{
                      width: `${calculatePercentage(
                        data.marketCap,
                        maxMarketCap
                      )}%`,
                    }}
                  ></div>
                </div>
              </td>
              <td className="px-4 text-right">
                {parseFloat(data.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-4 text-right">
                {data.dailyChanged.toFixed(2)}%
              </td>
              <td className="px-4 text-center">
                { (data.moneyIn && data.moneyOut) ? (
                  <ProgressBar inPercentage={ data.moneyIn } outPercentage={ data.moneyOut } />
                ) : ( "No Info" )}
              </td>
              <td className="px-4 text-center">
                { (data.breakIn && data.breakOut) ? (
                  <ProgressBar inPercentage={ data.breakIn } outPercentage={ data.breakOut } />
                ) : ( "No Info" )}
              </td>
              <td className="px-4 text-center">
                { data.volatility ? `${(data.volatility * 100).toFixed(2)}%` : "0%" }
              </td>
              <td className="px-4 text-center">
                { data.largeTxs
                  ? data.largeTxs
                  : 0}
              </td>
              <td className="px-4 text-right">
                ${formatNumber(data.volume)}
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
      </tbody>
    </table>
  );
};

export default Table;
