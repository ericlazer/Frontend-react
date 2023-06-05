import React, { useEffect, useState, useCallback } from "react";
import {
  numberFormat,
} from "../../../../utils/format";
import { getNFTMintRank, getNFTMintAmount } from "../../../../services/nft.service";
import DaisugiTable from "../../../../components/DaisugiTable";

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "Name",
    name: "contract_name",
    align: "left",
  },
  {
    header: "Mints",
    name: "mint_total",
    align: "right",
  },
  {
    header: "Mint Cost",
    name: "mint_cost",
    align: "right",
  },
  {
    header: "Floor Price",
    name: "floor_price",
    align: "right",
  },
  {
    header: "Sales",
    name: "sale_total",
    align: "right",
  },
];

const MintRank = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState({});
  const [amount, setAmount] = useState(0)

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
          <div>
            <img
              src={row.logo_url}
              className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
              alt="CoinIcon"
            />
            {row.contract_name}
          </div>,
          <div>{numberFormat(row.mint_total)}</div>,
          <div>{numberFormat(row.mint_cost)}</div>,
          <div>{numberFormat(row.floor_price)}</div>,
          <div>{numberFormat(row.sale_total)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTMintRank();
      const amountData = await getNFTMintAmount();
      drawTable(data);
      setAmount(amountData.amount);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="mt-5 overflow-x-auto overflow-y-hidden">
      {
        !isLoading && <p className="text-2xl text-white">Total Mints: {amount}</p>
      }
      <DaisugiTable tableData={tableData} isLoading={isLoading} />
    </div>
  );
};

export default MintRank;
