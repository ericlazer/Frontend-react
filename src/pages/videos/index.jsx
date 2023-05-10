import React from "react";
import Layout from "../../components/Layout";
import { VideosData } from "./data";

const DeFi = () => {
  return (
    <Layout>
      {/* <div className="flex w-full">
        <div className="w-1/2 m-5 rounded-lg bg-gradient-image">
          <div className="flex justify-between px-8 py-8">
            <h6 className="text-white text-lg">Market Capital</h6>
            <div className="">
              <label className="text-white text-sm">$5,656,087,725</label>
              <br />
              <label htmlFor="" className="text-pink-400 text-xs">
                0.04%
              </label>
            </div>
          </div>
          <div className="relative w-full pt-[25%] mt-6">
            <div className="absolute left-0 top-0 w-full h-full">
              <LineChart/>
            </div>
          </div>
        </div>
        <div className="w-1/2 m-5 rounded-lg bg-gradient-image">
          <div className="flex justify-between px-8 py-8">
            <h6 className="text-white text-lg">Market Capital</h6>
            <div>
              <label className="text-white text-sm">$5,656,087,725</label>
              <br />
              <label htmlFor="" className="text-pink-400 text-xs">
                0.04%
              </label>
            </div>
          </div>
          <div className="relative w-full pt-[25%] mt-6">
            <div className="absolute left-0 top-0 w-full h-full">
              <LineChart/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="p-5 text-white text-xl">DeFi</h3>
        <div className="flex w-full justify-between">
          <div className="">
            <div className="flex w-max py-2 bg-transparent border rounded-md border-stone-700 text-sm">
              {filter.menu1.map((item, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    className={`mx-2 px-2 py-1 rounded ${
                      item.selected
                        ? "bg-[#323232] text-white"
                        : "text-stone-500"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="flex w-max mt-2 py-2 bg-transparent border rounded-md border-stone-700 text-sm">
              {filter.menu2.map((item, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    className={`mx-2 px-2 py-1 rounded ${
                      item.selected
                        ? "bg-[#323232] text-white"
                        : "text-stone-500"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex w-max h-max text-lg">
            <button
              type="button"
              className="mr-8 px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-star" />
              Gainers
            </button>
            <button
              type="button"
              className="mr-8 px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-arrow-right" />
              Losers
            </button>
            <button
              type="button"
              className="px-8 py-3 rounded bg-gradient-btn text-white"
            >
              <i className="mr-3 fa fa-table" />
              Table View
            </button>
          </div>
        </div>
      </div> */}
      <div
        className='px-10 py-5 text-[42px] text-white'
      >
        Videos
      </div>
      <div className='flex justify-between mt-5 px-5 text-white'>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mt-8 w-[80%] md:w-full  mx-auto'>
        {
          VideosData.map((item, index) => (
            <div key={index} className='flex flex-col gap-4'>
               <div className="relative">
                <img src={item.image} alt="Blockchain News" className="w-full" />
                <div className="absolute bottom-4 right-4">
                  <i className="fa fa-play text-white text-xl px-4 py-[10px] bg-black opacity-[0.7] rounded-full"></i>
                </div>
              </div>
              <p className='text-[18px] text-white'>{item.content}</p>
              <div className='flex gap-4 text-[11px] text-white opacity-[0.5]'>
                <span>{item.writer}</span>
                <span>{item.dateAgo} Days Ago</span>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export default DeFi;
