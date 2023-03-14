import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import Layout from "../../components/Layout";
import CoinMainTable from "../../components/Tables/CoinMainTable";
import CoinTokenInsightTable from "../../components/Tables/CoinTokenInsightTable";
import CoinMarketImg from "../../assets/img/CoinMarket.gif";
import { API_URL } from "../../config/constants";

const socket = socketIOClient(API_URL);

const Coins = () => {
  const [coinData, setCoinData] = useState([]);
  const [tableNumber, setTableNumber] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    socket.on('TotalCoinInfo', async (data) => {
      if (data) {
        setCoinData(data);
        setIsLoading(false);
      }
    })
    console.log("err")
    // Remove the listener on unmount to prevent memory leaks
    return () => {
      socket.off('TotalCoinInfo')
    };
  }, [])
  
  useEffect(() => {
    socket.emit('NextCoinInfo', pageNum);
  }, [coinData]);

  const getNextCoins = () => {
    let temp = pageNum;
    temp += 50;
    setPageNum(temp);
  }

  const getPrevCoins = () => {
    let temp = pageNum;
    temp -= 50;
    if (temp < 0) temp = 0;
    setPageNum(temp);
  }

  return (
    <Layout>
      <div className="w-full">
        <div className="flex items-center">
          <input
            className="bg-black p-4 rounded-md w-[500px] text-white outline-0 border-0 mx-auto flex"
            placeholder="Search by name, type & more"
          />
          <div className="text-white text-[14px] font">
            <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300">
              Sign Up
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 ml-4">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-10 gap-10">
          <div className="bg-black w-[50%] flex px-8 py-16 rounded-lg">
            <div>
              <img
                src={CoinMarketImg}
                className="w-[200px]"
                alt="Coin Explore"
              />
            </div>
            <div className="m-auto">
              <div className="text-[32px] text-white font-bold">
                Coin Market List
              </div>
              <div className="text-[18px] text-white">
                Get all informaion about Coins
              </div>
              <button className="border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 text-white mt-8">
                Explore All
              </button>
            </div>
          </div>
          <div className="bg-black w-[50%] flex px-8 py-16 bg-[url('assets/img/trendingCoin.gif')] bg-cover bg-no-repeat relative rounded-lg">
            <div>{/* <img src={TrendingCoinImg} className='absolute'/> */}</div>
            <div>
              <div className="text-[32px] text-white font-bold">
                Trending Coins Today
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-center text-[40px] font-bold text-white">
            Crypto Prices Today
          </p>
          <div className="flex gap-3">
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg text-sm tracking-[1px] transition ease-in-out hover:opacity-[0.8] ${tableNumber === 0 && "bg-blue-700"}`} onClick={() => setTableNumber(0)}>
              LiveCoinWatch
            </button>
            <button className={`text-white py-2 px-5 bg-gray-700 rounded-lg text-sm tracking-[1px] transition ease-in-out hover:opacity-[0.8] ${tableNumber === 1 && "bg-blue-700"}`} onClick={() => setTableNumber(1)}>
              TokenInsight
            </button>
          </div>
          <div className="m-8">
            {
              tableNumber === 0 ? <CoinMainTable CoinData={coinData} loading={isLoading} /> :
              (tableNumber === 1 ? 
                  <CoinTokenInsightTable CoinData={coinData} loading={isLoading} />  : "")
            }
          </div>
          <div className="flex gap-5 justify-center">
            <button className="bg-gray-800 py-2 px-5 text-white font-bold rounded-md hover:bg-gray-600 transition ease-in-out" onClick={() => {
              getPrevCoins();
            }}>
              Prev
            </button>
            <button className="bg-gray-800 py-2 px-5 text-white font-bold rounded-md hover:bg-gray-600 transition ease-in-out" onClick={() => {
              getNextCoins();
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Coins;
