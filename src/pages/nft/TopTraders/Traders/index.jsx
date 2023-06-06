import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { numberFormat, marketCapFormat } from "../../../../utils/format";
import { getNFTTraders } from "../../../../services/nft.service";
import DaisugiTable from "../../../../components/DaisugiTable";

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "Address",
    name: "account_address",
    align: "left",
  },
  {
    header: "Volume",
    name: "volume",
    align: "right",
  },
  {
    header: "Trades",
    name: "trades_total",
    align: "right",
  },
];

const Traders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState({});

  const drawTable = useCallback((data) => {
    let newData = {
      columns,
      rows: [],
      totalPages: 0,
    };
    if (data.length) {
      data.forEach((row, key) => {
        newData.rows.push([
          key + 1,
          <a
            key={index}
            href={`https://etherscan.io/address/${row?.account_address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{row?.account_address}</div>
          </a>,
          <div>{marketCapFormat(row?.volume)}</div>,
          <div>{numberFormat(row?.trades_total)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTTraders();
      drawTable(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="mt-5 overflow-x-auto overflow-y-hidden">
      <DaisugiTable tableData={tableData} isLoading={isLoading} />
    </div>
  );
};

export default Traders;
