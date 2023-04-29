import React from "react";
import Layout from "../../components/Layout";
import ChartCard from "../../components/Cards/ChartCard";

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

const Exchange = () => {

  return (
    <Layout>
      <div>
        <h3 className="p-5 text-white text-xl">Exchange</h3>
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
          <div className="w-max h-max text-lg hidden md:flex">
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
      {/* Line Chart Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-10">
        <ChartCard
          header="Exchange"
          height={350}
          name="Binance"
          symbol=""
          imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/binance.png"
          value="$150,545,658"
          change={-2.87}
          charData={[7, 3, 1, 2, 5, 7, 5, 8, 9, 5, 4, 2, 5, 3]}
        />
        <ChartCard
          header="Exchange"
          height={350}
          name="Coinbase"
          symbol=""
          imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/__coin.png"
          value="$92,236,722"
          change={4.87}
          charData={[2, 5, 6, 4, 4, 5, 7, 6, 2, 4, 3, 6, 5, 7]}
      />
        <ChartCard
          header="Exchange"
          height={350}
          name="Kraken"
          symbol=""
          imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/kraken.png"
          value="$50,321,256"
          change={-3.2}
          charData={[4, 5, 3, 2, 8, 2, 5, 3, 6, 4, 3, 2, 6, 3]}
      />
        <ChartCard
          header="Exchange"
          height={350}
          name="Gemini"
          symbol=""
          imgURL="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/gemini.png"
          value="$30,325,163"
          change={7.4}
          charData={[3, 5, 2, 1, 5, 3, 6, 2, 3, 5, 2, 1, 5, 9]}
        />
      </div>
    </Layout>
  );
};

export default Exchange;
