import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Collection from "./Collection";
import MarketCap from "./MarketCap";
import Trade from "./Trade";
import Gas from "./Gas";
import SolanaNFT from "./Solana";
import AptosNFT from "./Aptos";

const Overview = () => {
  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">NFT Rank</span>
          <div className="sm:flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              Collection
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(1)}
            >
              MarketCap
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 2 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(2)}
            >
              Trade
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 3 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(3)}
            >
              Gas
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 4 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(4)}
            >
              Solana Rank
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 5 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(5)}
            >
              Aptos Rank
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <Collection />}
          {category === 1 && <MarketCap />}
          {category === 2 && <Trade />}
          {category === 3 && <Gas />}
          {category === 4 && <SolanaNFT />}
          {category === 5 && <AptosNFT />}
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
