import React, { useState } from "react";
import Layout from "../../../components/Layout";
import MintRank from "./Rank";

const Mint = () => {
  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">NFT Mint</span>
          <div className="sm:flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              Mint Rank
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <MintRank />}
        </div>
      </div>
    </Layout>
  );
};

export default Mint;
