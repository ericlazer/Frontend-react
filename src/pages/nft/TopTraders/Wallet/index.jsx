import React, { useState, useEffect, useCallback } from 'react'
import {
  numberFormat,
} from "../../../../utils/format";
import { getNFTTradersWallet } from '../../../../services/nft.service';
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
    header: "Holding Volume",
    name: "holding_volume",
    align: "right",
  },
  {
    header: "Buy Volume",
    name: "buy_volume",
    align: "right",
  },
  {
    header: "Sell Volume",
    name: "sell_volume",
    align: "right",
  },
  {
    header: "Hold Collections",
    name: "holding_collections",
    align: "right",
  },
  {
    header: "Hold NFTs",
    name: "holding_nfts",
    align: "right",
  },
  {
    header: "Trades",
    name: "trade_count",
    align: "right",
  },
];

const Wallet = () => {

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
          <a key={index} href={`https://etherscan.io/address/${row.account_address}`} target="_blank" rel="noopener noreferrer">
            <div>{row.account_address}</div>
          </a>,
          <div>{numberFormat(row.holding_volume)}</div>,
          <div>{numberFormat(row.buy_volume)}</div>,
          <div>{numberFormat(row.sell_volume)}</div>,
          <div>{numberFormat(row.holding_collections)}</div>,
          <div>{numberFormat(row.holding_nfts)}</div>,
          <div>{numberFormat(row.trade_count)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);
  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTTradersWallet();
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

export default Wallet