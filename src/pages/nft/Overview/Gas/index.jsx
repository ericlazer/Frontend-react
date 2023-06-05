import React, { useEffect, useState, useCallback } from 'react'
import { getNFTGas } from '../../../../services/nft.service';
import DaisugiTable from '../../../../components/DaisugiTable'
import ImageWithFallback from '../../../../components/ImageWithFallback';

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
    header: "Gas Fee 1h",
    name: "gas_fee_1h",
    align: "right",
  },
  {
    header: "Gas Fee 12h",
    name: "gas_fee_12h",
    align: "right",
  },
  {
    header: "Gas Fee 24h",
    name: "gas_fee_24h",
    align: "right",
  },
];

const Gas = () => {

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
            {row.contract_name}
          </div>,
          <div>{row.gas_fee_1h}</div>,
          <div>{row.gas_fee_12h}</div>,
          <div>{row.gas_fee_24h}</div>,
        ]);
      });
    }
    setTableData(newData);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTGas();
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

export default Gas