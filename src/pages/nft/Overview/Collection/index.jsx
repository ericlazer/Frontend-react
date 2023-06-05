import React, { useEffect, useState, useCallback } from "react";
import { coinPriceFormat, marketCapFormat, numberFormat } from "../../../../utils/format";
import { getNFTCollection } from "../../../../services/nft.service";
import DaisugiTable from '../../../../components/DaisugiTable'

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
    name: "sales_total",
    align: "right",
  },
  {
    header: "1D Change",
    name: "sales_change_1d",
    align: "right",
  },
  {
    header: "7D Change",
    name: "sales_change_7d",
    align: "right",
  },
  {
    header: "30D Change",
    name: "sales_change_30d",
    align: "right",
  },
  {
    header: "Volume",
    name: "volume_total",
    align: "right",
  },
  {
    header: "Floor price",
    name: "floor_price",
    align: "right",
  },
  {
    header: "Market Cap",
    name: "market_cap",
    align: "right",
  },
];

const Collection = () => {
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
            <img
              src={row.logo_url}
              className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
              alt="CoinIcon"
            />
            {row.contract_name}
          </div>,
          <div>{numberFormat(row.items_total)}</div>,
          <div>{numberFormat(row.owners_total)}</div>,
          <div>{numberFormat(row.sales_total)}</div>,
          <div
            className={`flex items-center justify-end text-[#${
              row.sales_change_1d[0] !== "-" ? "80FF9C" : "FF8080"
            }]`}
          >
            <i
              className={`text-xl fa fa-sort-${
                row.sales_change_1d[0] !== "-" ? "up" : "down"
              } ${row.sales_change_1d[0] !== "-" ? "mt-2" : "-mt-2"} mr-2`}
            />
            {row.sales_change_1d}
          </div>,
          <div
            className={`flex items-center justify-end text-[#${
              row.sales_change_7d[0] !== "-" ? "80FF9C" : "FF8080"
            }]`}
          >
            <i
              className={`text-xl fa fa-sort-${
                row.sales_change_7d[0] !== "-" ? "up" : "down"
              } ${row.sales_change_7d[0] !== "-" ? "mt-2" : "-mt-2"} mr-2`}
            />
            {row.sales_change_7d}
          </div>,
          <div
            className={`flex items-center justify-end text-[#${
              row.sales_change_30d[0] !== "-" ? "80FF9C" : "FF8080"
            }]`}
          >
            <i
              className={`text-xl fa fa-sort-${
                row.sales_change_30d[0] !== "-" ? "up" : "down"
              } ${row.sales_change_30d[0] !== "-" ? "mt-2" : "-mt-2"} mr-2`}
            />
            {row.sales_change_30d}
          </div>,
          <div>{marketCapFormat(row.volume_total)}</div>,
          <div>{coinPriceFormat(row.floor_price)}</div>,
          <div>{marketCapFormat(row.market_cap)}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTCollection();
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

export default Collection;
