import React from 'react'
import { coinPriceFormat } from '../utils/format';

const InvestListBox = ({name, round, price, date}) => {
  return (
    <div className="flex justify-between mt-2 items-center">
      <div className="flex gap-3 items-center">
        <div className="flex flex-col">
          <p className="text-[14px] text-white">{name}</p>
          <p className="text-[12px] text-white opacity-[0.5]">{round}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px] text-right font-semibold">
          {
            typeof price === "number" ?
              coinPriceFormat(price) :
              price
          }
        </p>
        <p className="text-white text-[12px]">
          {date}
        </p>
      </div>
    </div>
  );
}

export default InvestListBox