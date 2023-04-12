import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AllCoins from "../../../components/Coins/AllCoins";
import StableCoins from "../../../components/Coins/StableCoins";
import TrendingCoins from "../../../components/Coins/TrendingCoins";

const CoinRank = () => {
  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">Coins</span>
          <div className="flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              Coins
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(1)}
            >
              Stable Coins
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 2 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(2)}
            >
              Trending Coins
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 3 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(3)}
            >
              My Coins
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <AllCoins />}
          {category === 1 && <StableCoins />}
          {category === 2 && <TrendingCoins />}
        </div>
      </div>
    </Layout>
  );
};

export default CoinRank;
