import React, { useState } from 'react'
import Layout from '../../components/Layout'

const NewsData = [
  {
    image: '/img/news/2.png',
    content: "Crypto Exchange Coinbase Sues the SEC, Demands Court Compel Response to Rulemaking Petition – Here's the Latest",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  },
  {
    image: '/img/news/3.png',
    content: "Terra Luna Classic Price Prediction as $30 Million Trading Volume Floods In – Time to Buy?",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  },
  {
    image: '/img/news/4.png',
    content: "European Central Bank: Digital Euro to Offer 'Maximum Privacy,' Though Not as Much as Cash",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  },
  {
    image: '/img/news/5.png',
    content: "El Salvador Begins Bitcoin & Lightning Dev Courses – Who Are the ‘Rock Star’ Teachers?",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  },
  {
    image: '/img/news/6.png',
    content: "Best Crypto to Buy Now 25 April – Injective, Chiliz, Render",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  },
  {
    image: '/img/news/7.png',
    content: "Spate of “Free NFTs” Scams Blights South Korea",
    writer: 'By CMC Publisher',
    dateAgo: 1,
  }
]

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