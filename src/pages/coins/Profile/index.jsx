import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import { getCoinProfile } from "../../../services/coin.service";
import { coinPriceFormat, percentFormat, marketCapFormat, truncateString } from "../../../utils/format";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { Default } from "react-awesome-spinners";

const ChangeBox = ({changed, header}) => {
  return (
    <div className="text-[20px] text-white flex-col relative w-[200px]">
      <p>{header}</p>
      <span className={`text-[20px] ${changed >=1 ? "text-[#80FF9C]" : "text-[#FF8080]"}`}>
        {percentFormat(changed)}
        {
          changed >= 1 ? 
          <i className="fa fa-sort-up ml-2 absolute text-[#80FF9C] mt-3"></i> : <i className="fa fa-sort-down ml-2 absolute text-[#FF8080]"></i>
        }
      </span>
    </div>
  )
}

const MarketBox = ({value, header}) => {
  return (
    <div className="text-[20px] text-white flex-col">
      <p>{header}</p>
      <span className="text-[20px] text-gray-300">
        {marketCapFormat(value)}
      </span>
    </div>
  )
}

const Profile = () => {
  const { coin } = useParams();
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await getCoinProfile(coin);
      console.log(data);
      setProfile(data);
      setIsLoading(false)
    };

    getData();
  }, []);

  return (
    <Layout>
      <div
        className={`${
          isLoading ? 'flex justify-center items-center' : ''
        } mt-5`}
        style={{ minHeight: 'calc(100vh - 15rem)' }}
      >
        {
          isLoading ?
            <Default color="#a1a1a1" /> :
          <>
            <div className="flex gap-3 items-center">
              <img
                src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/${profile?.symbol.toLowerCase()}.png`}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-white text-xl">{profile?.name}</span>
                <span className="text-gray-500 text-md">{profile?.symbol}</span>
              </div>
              <span className="text-2xl text-white ml-5">
                {coinPriceFormat(profile?.price)}
              </span>
            </div>
            <div className="mt-10 gap-10">
              <div className="w-[100%]">
                <TradingViewWidget
                  symbol={`${profile?.symbol.toUpperCase()}USDT`}
                  theme={Themes.DARK}
                  locale="en"
                  width="100%"
                  height="450"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 mt-10">
                <div className="flex gap-10 items-center">
                  <ChangeBox header="Hourly Changed" changed={profile?.hourlyChanged} />
                  <ChangeBox header="Daily Changed" changed={profile?.dailyChanged} />
                  <ChangeBox header="Weekly Changed" changed={profile?.weeklyChanged} />
                </div>
                <div className="flex gap-10 items-center">
                  <ChangeBox header="Monthly Changed" changed={profile?.monthlyChanged} />
                  <ChangeBox header="Quartely Changed" changed={profile?.quarterlyChanged} />
                  <ChangeBox header="Yearly Changed" changed={profile?.yearlyChanged} />
                </div>
                <div className="flex gap-10 items-center mt-10">
                  <MarketBox value={profile?.volume} header="Volume" />
                  <MarketBox value={profile?.marketCap} header="Market Cap" />
                </div>
              </div>
            </div>
            <div className="mt-10">
              {
                profile && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: profile.localization[1].description
                    }}
                  />
                )
              }
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="flex flex-col">
                <p className="text-green-500 text-[20px] mb-3">Block Explorers</p>
                {
                  profile && profile.block_explorers.map((item, index) =>
                    <Link key={index} onClick={(event) => {
                      event.preventDefault();
                      window.open(`${item}`);
                    }}>
                      <span className="text-gray-500">{truncateString(item, 40)}</span>
                    </Link>
                  )
                }
              </div>
              <div className="flex flex-col">
                <p className="text-green-500 text-[20px] mb-3">Website</p>
                {
                  profile && profile.website.map((item, index) =>
                    <Link key={index} onClick={(event) => {
                      event.preventDefault();
                      window.open(`${item}`);
                    }}>
                      <p className="text-gray-500">{truncateString(item, 40)}</p>
                    </Link>
                  )
                }
              </div>
              <div className="flex flex-col">
                <p className="text-green-500 text-[20px] mb-3">Code</p>
                {
                  profile && profile.code.map((item, index) =>
                    <Link key={index} onClick={(event) => {
                      event.preventDefault();
                      window.open(`${item}`);
                    }}>
                      <p className="text-gray-500">{truncateString(item, 40)}</p>
                    </Link>
                  )
                }
                </div>
              <div className="flex flex-col">
                <p className="text-green-500 text-[20px] mb-3">Resource</p>
                  <Link onClick={(event) => {
                    event.preventDefault();
                    window.open(profile?.resource.doc[0]);
                  }}>
                    <p className="text-gray-500">{profile?.resource.doc[0]}</p>
                  </Link>
              </div>
            </div>
          </>
        }
      </div>
    </Layout>
  );
};

export default Profile;
