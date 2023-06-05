import React, { useEffect, useState, useCallback } from "react";
import { marketCapFormat, numberFormat } from "../../../../utils/format";
import { getAptosNFTRank } from "../../../../services/nft.service";
import DaisugiTable from '../../../../components/DaisugiTable'
import ImageWithFallback from '../../../../components/ImageWithFallback'

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
    header: "Sales",
    name: "sales",
    align: "right",
  },
  {
    header: "Lowest Price",
    name: "lowest_price",
    align: "right",
  },
  {
    header: "Volume",
    name: "volume",
    align: "right",
  },
  {
    header: "Volume Change",
    name: "volume_change",
    align: "right",
  },
  {
    header: "Market Cap",
    name: "market_cap",
    align: "right",
  },
];

const AptosNFT = () => {

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
            {
              row.logo_url ? 
              <ImageWithFallback
                src={row.logo_url}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                fallback="/img/CoinImages/blank.png"
                alt="CoinIcon"
                /> :
              <img
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                src="/img/CoinImages/blank.png"
                alt="Blank Coin"
              />
            }
            {row.collection}
          </div>,
          <div>{numberFormat(row.items_total)}</div>,
          <div>{numberFormat(row.owners_total)}</div>,
          <div>{numberFormat(row.sales)}</div>,
          <div>{numberFormat(row.lowest_price)}</div>,
          <div>{numberFormat(row.volume)}</div>,
          <div
            className={`flex items-center justify-end text-[#${
              row.volume_change[0] !== "-" ? "80FF9C" : "FF8080"
            }]`}
          >
            <i
              className={`text-xl fa fa-sort-${
                row.volume_change[0] !== "-" ? "up" : "down"
              } ${row.volume_change[0] !== "-" ? "mt-2" : "-mt-2"} mr-2`}
            />
            {row.volume_change}
          </div>,
          <div>{marketCapFormat(row.market_cap)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);
  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAptosNFTRank();
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
}

export default AptosNFT