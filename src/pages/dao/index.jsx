import React from "react";
import Layout from "../../components/Layout";
import DaisugiTable from "../../components/DaisugiTable";

const filter = {
  menu1: [
    {
      name: "Spot",
      selected: true,
    },
    {
      name: "Derivatives",
      selected: false,
    },
    {
      name: "DEX",
      selected: false,
    },
    {
      name: "Lending",
      selected: false,
    },
  ],
  menu2: [
    {
      name: "1D",
      selected: true,
    },
    {
      name: "7D",
      selected: false,
    },
    {
      name: "1M",
      selected: false,
    },
    {
      name: "3M",
      selected: false,
    },
    {
      name: "1Y",
      selected: false,
    },
  ],
};

const tableData = {
  columns: [
    {
      header: "Name",
      name: "name",
    },
    {
      header: "Price",
      name: "price",
    },
    {
      header: "1h%",
      name: "1h",
    },
    {
      header: "24h%",
      name: "24h",
    },
    {
      header: "7d%",
      name: "7d",
    },
    {
      header: "Market Cap",
      name: "marketcap",
    },
    {
      header: "Volumn(24h)",
      name: "volumn",
    },
    {
      header: "Circulating Supply",
      name: "circulating",
    },
    {
      header: "Last 7 Days",
      name: "last",
    },
  ],
  rows: [],
};

const DeFi = () => {
  return (
    <Layout>
      {/* Line Chart Cards */}
      <div className="flex w-full">
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
              {/* <LineChart /> */}
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
              {/* <LineChart/> */}
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
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
      </div>
      {/* Table */}
      <div>
        <DaisugiTable tableData={tableData} />
      </div>
    </Layout>
  );
};

export default DeFi;
