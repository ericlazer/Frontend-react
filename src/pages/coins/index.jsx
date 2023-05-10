import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SmallChartCard from "../../components/Cards/SmallChartCard";
import CoinListBox from "../../components/Coins/CoinListBox";
import ChartCard from "../../components/Cards/ChartCard";
import { getTopCoins } from "../../services/coin.service";
import { coinPriceFormat, percentFormat } from "../../utils/format";
import XBox from "../../components/XBox";
import { SocialInsights, CoinBreakDown } from "./data";

const Coins = () => {
  const [topCoins, setTopCoins] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const getUpdate = async () => {
    setIsLoading(true)
    const topCoinsData = await getTopCoins();
    setTopCoins(topCoinsData);
    setIsLoading(false)
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <Link to="/coins/rank">
          <XBox isBackground={true} header="Coins" isLoading={isLoading}>
            {topCoins &&
              topCoins.map((item, index) => (
                <CoinListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  symbol={item.symbol}
                  price={item.price}
                  changed={item.hourlyChanged}
                  type="Livecoin"
                />
              ))}
          </XBox>
        </Link>
        <Link to="/coins/liquidation">
          <XBox gap={true} header="Liquidation">
            <SmallChartCard
              header="1H Rekt"
              height={115}
              value="$1.84M"
              change={-0.03}
              chartData={[5, 3, 5, 6, 2, 4, 6, 2, 5, 6, 8, 9, 8, 7.5]}
            />
            <SmallChartCard
              header="12H Rekt"
              height={115}
              value="$23.50M"
              change={5.3}
              chartData={[4, 6, 5, 7, 6, 6, 4, 4, 5, 7, 4, 5, 7, 9]}
            />
            <SmallChartCard
              header="24H Rekt"
              height={115}
              value="$132.58M"
              change={-3.3}
              chartData={[6, 7, 6, 7, 4, 5, 8, 7, 4, 5, 7, 8, 6, 5]}
            />
          </XBox>
        </Link>
        <Link to="/coins/charts">
          <XBox isBackground={true} header="Charts">
            <ChartCard
              height={350}
              name="Bitcoin"
              symbol="BTC"
              imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png"
              value={topCoins && coinPriceFormat(topCoins[0].price)}
              change={topCoins && percentFormat(topCoins[0].hourlyChanged)}
              charData={[7, 5, 6, 4, 4, 7, 6, 5, 5, 5, 4, 3, 2, 2]}
            />
          </XBox>
        </Link>
        <Link to="/coins/trading">
          <XBox isBackground={true} header="Social Insights">
            {
              SocialInsights.map((item, index) => (
                <CoinListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  symbol={item.symbol}
                  price={item.value}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link to="/coins/exchange">
          <XBox header="Exchange">
            <img src="/img/CoinImages/Exchange.png" alt="Exchange" className="w-[350px] m-auto"/>
          </XBox>
        </Link>
        <Link to="/coins/breakdown">
          <XBox isBackground={true} header="Coin Breakdown">
            {CoinBreakDown.map((item, index) => (
              <CoinListBox
                key={index}
                name={item.name}
                price={item.volume}
                changed={item.changed}
              />
            ))}
          </XBox>
        </Link>
      </div>
    </Layout>
  );
};

export default Coins;
