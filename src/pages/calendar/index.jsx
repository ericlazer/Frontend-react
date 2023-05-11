import React from 'react'
import Layout from '../../components/Layout'
import XBox from '../../components/XBox'
import NFTCalendarBox from '../../components/Calendar/NFTCalendarBox'
import EconomicList from '../../components/Calendar/EconomicList'
import { NFTmints, Economics, Events, IDO, MajorEvents } from './data'

const Calendar = () => {

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <XBox isBackground={true} header="NFT Mints">
          <div className='flex flex-col gap-4'>
            {
              NFTmints.map((item, index) => (
                <NFTCalendarBox
                  key={index}
                  imgURL={item.imgURL}
                  title={item.title}
                  description={item.description}
                  networks={item.networks}
                  month={item.month}
                  day={item.day}
                  time={item.time}
                  price={item.price}
                  supply={item.supply}
                />
              ))
            }
          </div>
        </XBox>
        <XBox isBackground={true} header="Economic Calendar">
          {
            Economics.map((item, index) => (
              <EconomicList
                key={index}
                imgURL={item.imgURL}
                name={item.name}
                symbol={item.symbol}
                time={item.time}
              />
            ))  
          }
        </XBox>
        <XBox isBackground={true} header="Events">
          {
            Events.map((item, index) => (
              <EconomicList
                key={index}
                name={item.name}
                symbol={item.type}
                time={item.time}
                location={item.location}
              />
            ))  
          }
        </XBox>
        <XBox isBackground={true} header="ICO, IDO, Presale">
          <button className="text-[12px] text-white m-4 px-5 bg-[#3E3E3E] absolute z-10">
            IDO
          </button>
          <div className="mt-12 p-2 flex flex-col">
            <div className='flex gap-2 items-center'>
              <img src="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/_ccash.png" alt="MUON" className="rounded-full w-10" />
              <div className='flex flex-col'>
                <p className='text-white text-[14px]'>C-Cash</p>
                <p className='text-white text-[12px] opacity-[0.5]'>CCASH</p>
              </div>
            </div>
            {
              IDO.map((item, index) => (
                <div key={index} className='w-full flex justify-between mt-2'>
                  <p className='text-white text-[14px]'>{item.Category}</p>
                  <p className='text-white text-[14px]'>{item.value}</p>
                </div>
              ))
            }
          </div>
        </XBox>
        <XBox isBackground={true} header="Major Events">
          {
            MajorEvents.map((item, index) => (
              <EconomicList
                key={index}
                name={item.name}
                imgURL={item.imgURL}
                symbol={item.symbol}
                time={item.title}
              />
            ))  
          }
        </XBox>
      </div>
    </Layout>
  )
}

export default Calendar