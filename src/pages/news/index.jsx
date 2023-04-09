import React from 'react'
import Layout from '../../components/Layout'

const News = () => {

  const CoinData = [
    { id: 1, name: 'Bitcoin', price: '45632', hourlyChange: '-0.76', dailyChange: '-2.91', weeklyChange: '-1.12', marketCap: '$858.8B', volume: '$36.5B', lastSevenDays: 0.5 },
    { id: 2, name: 'Ethereum', price: '1470', hourlyChange: '-1.28', dailyChange: '-4.22', weeklyChange: '-1.36', marketCap: '$168.3B', volume: '$22.3B', lastSevenDays: 0.5 },
    { id: 3, name: 'Cardano', price: '121', hourlyChange: '+0.11', dailyChange: '+2.58', weeklyChange: '+25.25', marketCap: '$38.7B', volume: '$2.7B', lastSevenDays: 0.5 },
    { id: 4, name: 'Binance Coin', price: '221', hourlyChange: '-0.94', dailyChange: '-1.89', weeklyChange: '+29.63', marketCap: '$34.1B', volume: '$2.2B', lastSevenDays: 0.5 },
    { id: 5, name: 'Tether', price: '1', hourlyChange: '+0.06', dailyChange: '+0.06', weeklyChange: '+0.06', marketCap: '$33.6B', volume: '$120.9B', lastSevenDays: 0.5 }
  ]

  return (
    <Layout>
      <div className='w-full'>
        <div className='flex items-center'>
          <input className='bg-black p-4 rounded-md w-[500px] text-white outline-0 border-0 mx-auto flex' placeholder='Search by name, type & more' />
          <div className='text-white text-[14px] font'>
            <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300'>Sign Up</button>
            <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 ml-4'>Login</button>
          </div>
        </div>  
        <div className='flex justify-between mt-10 gap-10'>
          <div className='bg-black w-[50%] flex px-8 py-16 rounded-lg'>
            <div>
            </div>
            <div className='m-auto'>
              <div className='text-[32px] text-white font-bold'>Coin Market List</div>
              <div className='text-[18px] text-white'>Get all informaion about Coins</div>
              <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 text-white mt-8'>Explore All</button>
            </div>
          </div>
          <div className="bg-black w-[50%] flex px-8 py-16 bg-[url('assets/img/trendingCoin.gif')] bg-cover bg-no-repeat relative rounded-lg">
            <div>
              {/* <img src={TrendingCoinImg} className='absolute'/> */}
            </div>
            <div>
              <div className='text-[32px] text-white font-bold'>Trending Coins Today</div>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <p className='text-center text-[40px] font-bold text-white'>Crypto Prices Today</p>
          <div className='m-8'>
            {/* <CoinMainTable CoinData={CoinData} /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default News