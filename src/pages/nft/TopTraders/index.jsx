import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Traders from "./Traders";
import Wallet from './Wallet';
import WalletTrade from "./WalletTrade";

const TopTraders = () => {
  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">Traders Rank</span>
          <div className="sm:flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              Traders
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(1)}
            >
              Wallet
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 2 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(2)}
            >
              Wallet Trade
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <Traders />}
          {category === 1 && <Wallet />}
          {category === 2 && <WalletTrade />}
        </div>
      </div>
    </Layout>
  );
};

export default TopTraders;
