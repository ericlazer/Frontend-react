import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SmallChartCard from "../../components/Cards/SmallChartCard";
import { getDefiFee, getDefiYield } from "../../services/defi.service";
import CoinListBox from "../../components/Coins/CoinListBox";
import XBox from "../../components/XBox";
import { tempImage } from "./data";

const DeFiTVL = () => {
  const [feeData, setFeeData] = useState();
  const [yieldData, setYieldData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUpdate = async () => {
    setIsLoading(true);
    const responseDefi = await getDefiFee(1, 5);
    const responseYield = await getDefiYield(1, 5);
    setFeeData(responseDefi.data);
    setYieldData(responseYield.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <Link to="/coins/liquidation">
          <XBox gap={true} header="Overview TVL">
            <SmallChartCard
              header="Total Value Locked (USD)"
              height={115}
              value="$47.36b"
              change={0.21}
              chartData={[5, 3, 5, 6, 2, 4, 6, 2, 5, 6, 8, 6, 9, 11]}
            />
            <SmallChartCard header="Change (24h)" height={115} value="-2.44%" />
            <SmallChartCard
              header="Lido Dominance"
              height={115}
              value="25.28%"
            />
          </XBox>
        </Link>
        <Link to="/defi/fee">
          <XBox isBackground={true} gap={true} header="Fees & Revenue" isLoading={isLoading}>
            {feeData &&
              feeData.map((item, index) => (
                <CoinListBox
                  key={index}
                  // imgURL={item.logo}
                  imgURL={tempImage[index]}
                  name={item.name}
                  price={item.dailyFees}
                />
              ))}
          </XBox>
        </Link>
        <Link to="/defi/yield">
          <XBox isBackground={true} header="Yields" isLoading={isLoading}>
            {yieldData &&
              yieldData.map((item, index) => (
                <CoinListBox
                  key={index}
                  imgURL={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${item.symbol.toLowerCase()}.png`}
                  name={item.symbol}
                  price={item.tvlUsd}
                  changed={item.apy}
                />
              ))}
          </XBox>
        </Link>
        <Link to="/defi/bridge">
          <XBox gap={true} header="Bridge">
            <SmallChartCard
              header="Total volume (24h)"
              height={115}
              value="$224.77M"
              change={1.2}
              chartData={[7, 4, 5, 5, 5, 4, 6, 2, 5, 6, 8, 6, 9, 11]}
            />
            <SmallChartCard
              header="Total volume (7d)"
              height={115}
              value="$1.53B"
              change={1.2}
              chartData={[7, 8, 5, 6, 3, 3, 2, 1, 6, 7, 8, 8, 10, 11]}
            />
            <SmallChartCard
              header="Total volume (1mo)"
              height={115}
              value="$7.01B"
              change={-2.3}
              chartData={[2, 5, 7, 5, 4, 8, 6, 4, 7, 5, 4, 8, 6, 4]}
            />
          </XBox>
        </Link>
        <Link to="/defi/liquidation">
          <XBox gap={true} header="Defi Liquidations">
            <SmallChartCard
              header="Total Liquidatable (USD)"
              height={115}
              value="$1.7B"
              change={1.2}
              chartData={[7, 4, 5, 5, 5, 4, 6, 2, 5, 6, 8, 6, 9, 11]}
            />
            <SmallChartCard
              header="Liquidatable value change (24h)"
              height={115}
              value="$1.2%"
            />
            <SmallChartCard
              header="Within - 20% of current price"
              height={115}
              value="$132.2M"
              change={-2.3}
              chartData={[2, 5, 7, 5, 4, 8, 6, 4, 7, 5, 4, 8, 6, 4]}
            />
          </XBox>
        </Link>
        <Link to="/defi/breakdown">
          <XBox gap={true} header="Breakdown">
            <SmallChartCard
              header="Total Volume (24h)"
              height={115}
              value="$3.73B"
              change={1.2}
              chartData={[7, 4, 5, 5, 5, 4, 6, 2, 5, 6, 8, 6, 9, 11]}
            />
            <SmallChartCard
              header="Total Volume (7d)"
              height={115}
              value="$20.43B"
              change={2.3}
              chartData={[5, 6, 5, 6, 1, 2, 7, 7, 4, 5, 7, 5, 9, 6]}
            />
            <SmallChartCard
              header="Weekly Change"
              height={115}
              value="$16.77%"
            />
          </XBox>
        </Link>
      </div>
    </Layout>
  );
};

export default DeFiTVL;
