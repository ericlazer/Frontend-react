import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SmallChartCard from "../../components/Cards/SmallChartCard";
import ChartCard from "../../components/Cards/ChartCard";
import { getTotalGainers, getTotalLosers } from '../../services/coin.service'
import { coinPriceFormat, percentFormat } from "../../utils/format";
import { NFTImages } from "./data";

const Home = () => {

  const [gainers, setGainers] = useState();
  const [losers, setLosers] = useState();

  const getUpdate = async () => {
    const gainersData = await getTotalGainers();
    const losersData = await getTotalLosers();
    setGainers(gainersData);
    setLosers(losersData);
  }

  useEffect(() => {
    getUpdate()
  }, [])

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="flex flex-col gap-[10px]">
          <SmallChartCard
            header="BTC Domiance"
            height={110}
            value="45%"
            change={-0.03}
            chartData={[5, 2, 5, 3, 2, 1, 6, 2, 5, 6, 8, 9, 8, 7.5,]}
          />
          <SmallChartCard
            header="Volume 24h"
            height={110}
            value="$435,765,879"
            change={-2.3}
            chartData={[3, 5, 2, 3, 4, 2, 6, 4, 6, 7, 0, 3, 4, 3,]}
          />
          <SmallChartCard
            header="Market Capital"
            height={110}
            value="$435,765,879"
            change={12.3}
            chartData={[8, 7, 6, 7, 5, 4, 7, 4, 6, 5, 6, 3, 4, 6,]}
          />
        </div>
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5">
          <p className="text-[14px] text-white opacity-0.5">Crypto Price Gainers</p>
          {
            gainers && gainers.map((item, index) => (
              <div key={index} className="flex justify-between mt-2 items-center">
                <div className="flex gap-3 items-center">
                  <img src={item.imgURL} alt="Coin Gainers" className="rounded-full" />
                  <div className="flex flex-col">
                    <p className="text-[14px] text-white">{item.name}</p>
                    <p className="text-[12px] text-white opacity-[0.5]">{item.symbol}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-[14px] text-right">{coinPriceFormat(item.price)}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <i className="fa fa-sort-up mt-2 text-[18px] text-[#58FF1E]"></i>
                    <p className="text-white text-[12px]">{percentFormat(item.dailyChanged)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5">
          <p className="text-[14px] text-white opacity-0.5">Crypto Price Losers</p>
          {
            losers && losers.map((item, index) => (
              <div key={index} className="flex justify-between mt-3 items-center">
                <div className="flex gap-3 items-center">
                  <img src={item.imgURL} alt="Coin Losers" className="rounded-full" />
                  <div className="flex flex-col">
                    <p className="text-[14px] text-white">{item.name}</p>
                    <p className="text-[12px] text-white opacity-[0.5]">{item.symbol}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-[14px] text-right">{coinPriceFormat(item.price)}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <i className="fa fa-sort-down -mt-2 text-[18px] text-[#FF2B1E]"></i>
                    <p className="text-white text-[12px]">{percentFormat(item.dailyChanged)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5 grid grid-cols-2 gap-3">
          {
            NFTImages.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img src={item} className="w-full h-full object-cover" alt="NFTs" />
              </div>
            ))
          }
        </div>
        <ChartCard
          header="Coin"
          height={350}
          name="Bitcoin"
          symbol="BTC"
          imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png"
          value="$150,545,658"
          change={-2.87}
          charData={[7, 3, 1, 2, 5, 7, 5, 8, 9, 5, 4, 2, 5, 3]}
        />
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5">
          <div className="h-[60%] relative rounded-lg">
            <img src="/img/nfts/5.png" className="w-full h-full object-cover absolute rounded-lg" alt="NFTs" />
          </div>
          <div className="mt-2 p-2">
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-white">CAPTAINZ</span>
              <img src="/icon/LinkIcon.png" alt="Link Icon" className="w-4 h-4" />
            </div>
            <div className="grid grid-cols-5 mt-2">
              <div>
                <p className="text-[13px] text-white">35,701 ETH</p>
                <p className="text-[13px] text-white opacity-[0.5]">total volume</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] text-white">7.75 ETH</p>
                <p className="text-[13px] text-white opacity-[0.5]">floor price</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] text-white">4,630</p>
                <p className="text-[13px] text-white opacity-[0.5]">owners</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] text-white">7.3 WETH</p>
                <p className="text-[13px] text-white opacity-[0.5]">best offer</p>
              </div>
              <div className="text-right">
                <p className="text-[13px] text-white">0.7%</p>
                <p className="text-[13px] text-white opacity-[0.5]">listed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
