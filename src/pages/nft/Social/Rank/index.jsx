import React, { useState, useEffect, useCallback } from "react";
import { getNFTSocialRanks } from "../../../../services/nft.service";
import DaisugiTable from "../../../../components/DaisugiTable";
import {
  formatUnixTimestamp,
  normalPercentFormat,
  coinPriceFormat,
} from "../../../../utils/format";

const columns = [
  {
    header: "No",
    name: "no",
    align: "left",
  },
  {
    header: "Category",
    name: "category",
    align: "center",
  },
  {
    header: "Value",
    name: "value",
    align: "right",
  },
  {
    header: "Prev Value",
    name: "prev_value",
    align: "right",
  },
  {
    header: "Intial Value",
    name: "initial_value",
    align: "right",
  },
  {
    header: "Change",
    name: "change",
    align: "right",
  },
  {
    header: "Variability",
    name: "variability",
    align: "right",
  },
  {
    header: "Time Created",
    name: "time_created",
    align: "right",
  },
  {
    header: "Name",
    name: "name",
    align: "center",
  },
];

const Influencers = () => {
  const [tableData, setTableData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
          <div>{row?.category.replace(/_/g, " ")}</div>,
          <div>{coinPriceFormat(row?.value)}</div>,
          <div>{coinPriceFormat(row?.prev_value)}</div>,
          <div>{coinPriceFormat(row?.initial_value)}</div>,
          <div>{normalPercentFormat(row?.change)}</div>,
          <div>{row?.variability}</div>,
          <div>{formatUnixTimestamp(row?.time_created)}</div>,
          <div>{row?.name}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTSocialRanks();
      drawTable(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="mt-5 overflow-x-auto overflow-y-hidden">
        <DaisugiTable tableData={tableData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Influencers;
