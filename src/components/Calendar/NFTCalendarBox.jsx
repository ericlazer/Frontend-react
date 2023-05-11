import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { chainImages } from '../../data/chain'

const NFTCalendarBox = ({imgURL, title, description, networks, month, day, time, price, supply}) => {
  return (
    <div className='flex flex-col p-2 rounded-xl border-2 border-[#323232]'>
      <div className='grid grid-cols-3'>
        <img src={imgURL} alt={title} className='rounded-xl w-[100px] h-[100px]' />
        <div className='flex flex-col relative'>
          <p className='font-bold text-[18px]'>{title}</p>
          <div className="flex gap-2 text-[12px] text-gray-300">
            {
              networks &&
              (networks.length < 4
                ? networks.map((item, index) => (
                    <div key={index} className="flex gap-1 items-center">
                      <img
                        src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${chainImages[item.toLowerCase()]}`}
                        alt="Network"
                        className="w-5 h-5"
                      ></img>
                      <span>{item}</span>
                    </div>
                  ))
                : networks.map((item, index) => (
                    <img
                      key={index}
                      src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${chainImages[item.toLowerCase()]}`}
                      alt="Network"
                      className="w-5 h-5"
                    ></img>
              )))
            }
          </div>
          <div className='flex gap-2 bottom-2 absolute'>
            <FontAwesomeIcon
              icon={faTwitter}
              color="#1c9cea"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              color="#5562ea"
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[80px] h-[80px] bg-gray-500 rounded-lg'>
            <div className='w-full h-[30%] bg-red-500 text-center rounded-t-lg text-[13px]'>
              {month}
            </div>
            <div className='w-full flex justify-center items-center h-[70%]'>
              {day}
            </div>
          </div>
          <span className='text-sm'>{time} UTC</span>
        </div>
      </div>
      <div className='flex gap-5 text-sm mt-2'>
        <span>Price: {price}</span>
        <span>Supply: {supply} NFTs</span>
      </div>
    </div>
  )
}

export default NFTCalendarBox