import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Table header width
const columnWidths = {
  id: "50px",
  name: "250px",
  athPrice: "200px",
  athDate: "100px",
  price: "100px",
  atlPrice: "100px",
  atlDate: "100px",
  fromATH: "100px",
  website: "200px",
  community: "100px",
};

const headerTextPosition = {
  "#": "text-right",
  "Name": "text-left",
  "ATH Price": "text-right",
  "ATH Date": "text-center",
  "Price": "text-right",
  "ATL Price": "text-center",
  "ATL Date": "text-center",
  "% from ATH": "text-center",
  "Website": "text-center",
  "Community": "text-center",
};

// Table Headers
const CoinTableHeader = [
  { header: "#", columnName: "rank" },
  { header: "Name", columnName: "name" },
  { header: "ATH Price", columnName: "athPrice" },
  { header: "ATH Date", columnName: "athDate" },
  { header: "Price", columnName: "price" },
  { header: "ATL Price", columnName: "atlPrice" },
  { header: "ATL Date", columnName: "atlDate" },
  { header: "% from ATH", columnName: "fromATH" },
  { header: "Website", columnName: "website" },
  { header: "Community", columnName: "community" },
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

const calculatePercentage = (value, max) => {
  return (value / max) * 100;
};

const ellipsizedString = (string) => {
  if (string.length > 20) {
    return string.substring(0, 20) + '...';
  } else {
    return string;
  }
}

const Table = (props) => {
  const [sortBy, setSortBy] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [tableData, setTableData] = useState([]);

  const convertDate = (string) => {
    const date = new Date(string);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/\//g, '-');


    return formattedDate;
  }

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
    
    setTableData(props.CoinData);
    // console.log(props.CoinData)
    // }
  }, [props.CoinData, sortBy, sortAsc]);

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
                {data.athPrice ? formatPrice(data.athPrice) : '$0.00'}  
              </td>
              <td className="px-4 text-center">
                {data.athDate && convertDate(data.athDate)}
              </td>
              <td className="px-4 text-right">
                {data.price ? formatPrice(data.price) : '$0.00'}
              </td>
              <td className="px-4 text-right">
                {data.atlPrice ? parseFloat(data.atlPrice).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                }) : '$0.00'}
              </td>
              <td className="px-4 text-center">
                {data.atlDate && convertDate(data.atlDate)}
              </td>
              <td className="px-4 text-center text-red-400">
                { data.athPrice ? `- ${(100 - (data.price / data.athPrice) * 100).toPrecision(2)}%` : "0%" }
              </td>
              <td className="px-4 text-center text-ellipsis text-blue-400 transition ease-in-out hover:text-blue-500">
                <Link to={ data.website ? data.website : '/' }>{ data.website && ellipsizedString(data.website) }</Link>
              </td>
              <td className="px-4 text-right">
                <Link to={ data.community ? data.community.twitter : '/' }><button className="cursor-pointer text-gray-400 transition ease-in-out duration-300 hover:bg-gray-600 hover:text-white bg-gray-800 rounded-lg py-2 px-5">Join</button></Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
