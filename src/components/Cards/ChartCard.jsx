import React from "react";
import LineChart from "../Charts/LineChart";

const ChartCard = ({
  header,
  height,
  name,
  symbol,
  imgURL,
  value,
  change,
  charData,
}) => {
  return (
    <div
      className={`bg-gradient-card1 h-[${
        height && height
      }px] rounded-lg relative`}
    >
      <div className="p-5">
        {
          header &&
          <button className="text-[12px] text-white px-5 py-2 bg-[#3E3E3E]">
            {header}
          </button>
        }
        <div className="flex justify-between mt-4">
          <div className="flex gap-3 items-center">
            <img src={imgURL} alt="Logo" width={32} className="rounded-full" />
            <div className="flex flex-col">
              <p className="text-[16px] text-white">{name}</p>
              <p className="text-[12px] text-white opacity-[0.5]">{symbol}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] text-white">{value}</p>
            <div className="flex gap-1 items-center">
              <i
                className={`fa ${
                  change < 0 ? "fa-sort-down" : "fa-sort-up"
                } text-[18px] text-[#FF2B1E] ${change < 0 ? "-mt-2" : "mt-2"}`}
                style={{ color: change < 0 ? "#FF2B1E" : "#58FF1E" }}
              />
              <p
                className="text-[12px]"
                style={{ color: change < 0 ? "#FF2B1E" : "#58FF1E" }}
              >
                {
                  change && (typeof change === "string") ? change : change + "%"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[60%]">
        <LineChart
          data={{
            labels: charData,
            datasets: [
              {
                fill: true,
                label: "Dataset",
                data: charData,
                borderWidth: 1,
                pointRadius: 0,
                borderColor: change > 0 ? "#28FF98" : "#db4737",
                backgroundColor: change > 0 ? "#28FF9822" : "#db473722",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChartCard;
