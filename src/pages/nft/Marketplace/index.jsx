import React, { useEffect, useState, useCallback } from "react";
import Layout from "../../../components/Layout";
import { getNFTMarketplace } from "../../../services/nft.service";
import { marketCapFormat, numberFormat } from "../../../utils/format";
import DaisugiTable from '../../../components/DaisugiTable'

const filter = {
  timeRange: ["1d", "7d", "30d", "all"],
};

const columns = [
  {
    header: "No",
    name: "no",
    align: "center",
  },
  {
    header: "MarketPlace",
    name: "contract_name",
    align: "left",
  },
  {
    header: "Volume",
    name: "volume",
    align: "right",
  },
  {
    header: "Gas",
    name: "gas",
    align: "right",
  },
  {
    header: "Sales",
    name: "sales",
    align: "right",
  },
  {
    header: "Wallets",
    name: "wallets",
    align: "right",
  },
  {
    header: "1D Change",
    name: "volume1d_change",
    align: "right",
  },
  {
    header: "7D Change",
    name: "volume7d_change",
    align: "right",
  },
  {
    header: "30D Change",
    name: "volume30d_change",
    align: "right",
  },
  {
    header: "Fee",
    name: "handling_fee",
    align: "right",
  },
];

const Marketplace = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tableData, setTableData] = useState({});
  const [timeRange, setTimeRange] = useState(filter.timeRange[0]);

  const handleSelectOption = (event, selectType) => {
    const { value } = event.target;
    switch (selectType) {
      case "timeRange":
        setTimeRange(value);
        break;
      default:
        break;
    }
  };

  const drawTable = useCallback(
    (data) => {
      let newData = {
        columns,
        rows: [],
        totalPages: 0,
      };
      if (data.length) {
        data.forEach((row, key) => {
          newData.rows.push([
            (key + 1),
            <div>
              <img
                src={row?.logo_url}
                className="inline-block w-[1.5rem] h-[1.5rem] mr-3 rounded-full"
                alt="CoinIcon"
              />
              {row?.contract_name}
            </div>,
            <div>{marketCapFormat(row?.volume)}</div>,
            <div>{marketCapFormat(row?.gas)}</div>,
            <div>{numberFormat(row?.sales)}</div>,
            <div>{numberFormat(row?.wallets)}</div>,
            <div
              className={`flex items-center justify-end text-[#${
                row?.volume1d_change[0] !== '-'
                  ? "80FF9C"
                  : "FF8080"
              }]`}
            >
              <i
                className={`text-xl fa fa-sort-${
                  row?.volume1d_change[0] !== '-'
                    ? "up"
                    : "down"
                } ${
                  row?.volume1d_change[0] !== '-'
                    ? "mt-2"
                    : "-mt-2"
                } mr-2`}
              />
              {row?.volume1d_change}
            </div>,
            <div
              className={`flex items-center justify-end text-[#${
                row?.volume7d_change[0] !== '-'
                  ? "80FF9C"
                  : "FF8080"
              }]`}
            >
              <i
                className={`text-xl fa fa-sort-${
                  row?.volume7d_change[0] !== '-'
                    ? "up"
                    : "down"
                } ${
                  row?.volume7d_change[0] !== '-'
                    ? "mt-2"
                    : "-mt-2"
                } mr-2`}
              />
              {row?.volume7d_change}
            </div>,
            <div
              className={`flex items-center justify-end text-[#${
                row?.volume30d_change[0] !== '-'
                  ? "80FF9C"
                  : "FF8080"
              }]`}
            >
              <i
                className={`text-xl fa fa-sort-${
                  row?.volume30d_change[0] !== '-'
                    ? "up"
                    : "down"
                } ${
                  row?.volume30d_change[0] !== '-'
                    ? "mt-2"
                    : "-mt-2"
                } mr-2`}
              />
              {row?.volume30d_change}
            </div>,
            <div>{row?.handling_fee}</div>,
          ]);
        });
      }
      setTableData(newData);
    },
    []
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTMarketplace(timeRange);
      drawTable(data);
      setIsLoading(false);
    };

    getData();
  }, [timeRange]);

  return (
    <Layout>
      <div className="flex justify-end mr-5">
        <select
          className="ml-5 px-8 py-3 rounded bg-gradient-btn text-white"
          onChange={(event) => handleSelectOption(event, "timeRange")}
        >
          {filter.timeRange.map((item, key) => {
            return (
              <option key={key} className="bg-[#313131]" value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-5 overflow-x-auto overflow-y-hidden">
        <DaisugiTable tableData={tableData} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default Marketplace;
