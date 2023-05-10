import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageWithFallback from "../ImageWithFallback";
import { API_BASE } from "../../config/constants";
import { chains } from "../../data/chain";
import { coinPriceFormat } from "../../utils/format";
import { Default } from "react-awesome-spinners";

const TrendingCoins = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await axios.get(API_BASE + "/coin/topcoins");
      setData(response.data.topCoins);
      setIsLoading(false);
    };

    getData();
  }, []);

  // group coins by Chain
  const groupByChain = (coins) => {
    return coins.reduce((acc, coin) => {
      if (!acc[coin.chain]) {
        acc[coin.chain] = [];
      }
      acc[coin.chain].push(coin);
      return acc;
    }, {});
  };

  const renderCoins = () => {
    if (!data) return null;

    const groupedCoins = groupByChain(data);

    return chains.map((item) => {
      if (!groupedCoins[item.chain]) return null;

      const coins = groupedCoins[item.chain];

      return (
        <div key={item.chain}>
          <div className="flex gap-5 mb-5 items-center">
            <ImageWithFallback
              src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${item.img}`}
              fallback="/img/CoinImages/blank.png" // Replace this with the path to your fallback image
              alt={item.chain}
            />
            <div className="flex flex-col">
              <span className="text-xl text-white font-semibold">
                {item.name}
              </span>
              <span className="text-md text-gray-300 font-semibold mb-2">
                {item.symbol}
              </span>
            </div>
          </div>
          <ul className="text-gray-400">
            {coins.map((coin) => (
              <li
                key={coin.id}
                className="mb-2 p-2 bg-[#323232] rounded-md flex items-center gap-4"
              >
                <div>
                  <ImageWithFallback
                    src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${coin.symbol.toLowerCase()}.png`}
                    fallback="/img/CoinImages/blank.png" // Replace this with the path to your fallback image
                    alt={coin.symbol}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-300 font-semibold">
                      {coin.name}
                    </span>
                    <span className="text-sm">{coin.symbol}</span>
                  </div>
                  <div>{coinPriceFormat(coin.price)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <div
      className={`${
        isLoading ? 'flex justify-center items-center' : 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'
      } mt-5`}
      style={{ minHeight: 'calc(100vh - 15rem)' }}
    >
      {
        isLoading ?
          <Default color="#a1a1a1" /> :
          renderCoins()
      }
    </div>
  );
};

export default TrendingCoins;
