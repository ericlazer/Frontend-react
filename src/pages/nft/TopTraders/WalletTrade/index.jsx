import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import {
  numberFormat,
  marketCapFormat,
} from "../../../../utils/format";
import { getWalletTrading } from '../../../../services/nft.service';
import DaisugiTable from '../../../../components/DaisugiTable'

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
    name: "trade_volume",
    align: "right",
  },
  {
    header: "Volume (USD)",
    name: "trade_volume_usdc",
    align: "right",
  },
  {
    header: "Trade Count",
    name: "trade_count",
    align: "right",
  },
];

const WalletTrade = () => {

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
          <Link onClick={(event) => {
            event.preventDefault();
            window.open(`https://etherscan.io/address/${row.account_address}`);
          }}>
            <div>{row.account_address}</div>
          </Link>,
          <div>{numberFormat(row.trade_volume)}</div>,
          <div>{marketCapFormat(row.trade_volume_usdc)}</div>,
          <div>{numberFormat(row.trade_count)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getWalletTrading();
      drawTable(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="mt-5 overflow-x-auto overflow-y-hidden">
      <DaisugiTable tableData={tableData} isLoading={isLoading} />
    </div>
  )
}

export default WalletTrade