import React from "react";
import Layout from "../../components/Layout";
import ChartCard from "../../components/Cards/ChartCard";

const Pins = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl">Your Pins</div>
        <div className="text-white px-5 py-3 cursor-pointer bg-[#212121] mr-10 rounded-lg transition hover:bg-gray-600">
          Manage Pins
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3 mt-4">
        <div>
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
        </div>
        <div>
          <ChartCard
            header="DeFi"
            height={350}
            name="LIDO"
            symbol="lido"
            imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/ldo.png"
            value="$2.57"
            change={12.87}
            charData={[4, 1, 3, 1, 5, 5, 6, 7, 8, 9, 6, 2, 4, 3]}
          />
        </div>
        <div>
          <ChartCard
            header="Dapp"
            height={350}
            name="Alien World"
            symbol="Games"
            imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/alien.png"
            value="$229.84"
            change={6.87}
            charData={[0, 1, 1, 4, 2, 1, 3, 2, 1, 9, 4, 1, 2, 3]}
          />
        </div>
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5">
          <div className="h-[60%] relative rounded-lg">
            <button className="text-[12px] text-white m-4 px-5 py-2 bg-[#3E3E3E] absolute z-10">
              News
            </button>
            <img src="/img/news/1.png" className="w-full h-full object-cover absolute rounded-lg" alt="News" />
          </div>
          <div className="mt-2 p-2">
            <div className="flex justify-between items-center">
              <div className="w-[60%] text-white">
                A new and latest Dapp that are taking over gaming industry
              </div>
              <img src="/icon/LinkIcon.png" alt="Link Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-card1 h-[350px] rounded-lg p-5">
          <div className="h-[60%] relative rounded-lg">
            <button className="text-[12px] text-white m-4 px-5 py-2 bg-[#3E3E3E] absolute z-10">
              NFT
            </button>
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
        <div>
          <ChartCard
            header="Exchange"
            height={350}
            name="PancakeSwap V3"
            symbol="BNB Chain"
            imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/pancakeswapv2.png"
            value="$229.84"
            change={6.87}
            charData={[0, 1, 2, 1, 5, 6, 4, 8, 5, 9, 2, 7, 6, 7]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Pins;
