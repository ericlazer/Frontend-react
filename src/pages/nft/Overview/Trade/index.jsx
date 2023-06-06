import React, { useEffect, useState, useCallback } from "react";
import {
  numberFormat,
  marketCapFormat,
  coinPriceFormat,
} from "../../../../utils/format";
import { getNFTTrade } from "../../../../services/nft.service";
import DaisugiTable from "../../../../components/DaisugiTable";
import ImageWithFallback from "../../../../components/ImageWithFallback";

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
    header: "Floor Price",
    name: "floor_price",
    align: "right",
  },
  {
    header: "Items",
    name: "items_total",
    align: "right",
  },
  {
    header: "Owners",
    name: "owners_total",
    align: "right",
  },
  {
    header: "Lowest Price",
    name: "lowest_price",
    align: "right",
  },
  {
    header: "Average Price",
    name: "average_price",
    align: "right",
  },
  {
    header: "Highest Price",
    name: "highest_price",
    align: "right",
  },
  {
    header: "Volume",
    name: "volume",
    align: "right",
  },
];

const Trade = () => {
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
          <div>
            {row?.logo_url ? (
              <ImageWithFallback
                src={row?.logo_url}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                fallback="/img/CoinImages/blank.png"
                alt="CoinIcon"
              />
            ) : (
              <img
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                src="/img/CoinImages/blank.png"
                alt="Blank Coin"
              />
            )}
            {row?.contract_name}
          </div>,
          <div>{numberFormat(row?.floor_price)}</div>,
          <div>{numberFormat(row?.items_total)}</div>,
          <div>{numberFormat(row?.owners_total)}</div>,
          <div>{numberFormat(row?.lowest_price)}</div>,
          <div>{numberFormat(row?.average_price)}</div>,
          <div>{numberFormat(row?.highest_price)}</div>,
          <div>{numberFormat(row?.volume)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTTrade();
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

export default Trade;
