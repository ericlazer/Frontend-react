import React from 'react'

const EconomicList = ({imgURL, name, symbol, time, location}) => {
  return (
    <div className="flex justify-between mt-2 items-center">
      <div className="flex gap-3 items-center">
        {imgURL && (
          <img src={imgURL} alt={name} className="rounded-full w-10" />
        )}
        <div className="flex flex-col">
          <p className="text-[14px] text-white">{name}</p>
          <p className="text-[12px] text-white opacity-[0.5]">{symbol}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px] text-right font-semibold">
          {time}
        </p>
        <p className="text-white text-[12px] opacity-[0.5]">
          {location}
        </p>
      </div>
    </div>
  )
}

export default EconomicList