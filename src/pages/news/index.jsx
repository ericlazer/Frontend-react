import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { NewsData } from './data'

const News = () => {

  const [rankType, setRankType] = useState(0)

  return (
    <Layout>
      <div
        className='px-10 py-5 text-[42px] text-white bg-cover bg-no-repeat'
        style={{ backgroundImage: 'url(/img/news/bg.png)' }}
      >
        News & <br/> Research
      </div>
      <div className='flex justify-between mt-5 px-5'>
        <div className='flex gap-8 text-[20px]'>
          <button
            style={{ color: rankType === 0 ? "white" : "gray" }}
          >
            Trending
          </button>
          <button
            style={{ color: rankType === 1 ? "white" : "gray" }}
          >
            Latest
          </button>
        </div>
        <div>

        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mt-8 w-[80%] md:w-full  mx-auto'>
        {
          NewsData.map((item, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <img src={item.image} alt="Blockchain News" />
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
  )
}

export default News