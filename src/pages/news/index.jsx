import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TopNews from './TopNews';
import Twitter from './Twitter';
import Reddit from './Reddit';

const News = () => {

  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">News</span>
          <div className="sm:flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              News
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(1)}
            >
              Twitter
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 2 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(2)}
            >
              Reddit
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <TopNews />}
          {category === 1 && <Twitter />}
          {category === 2 && <Reddit />}
        </div>
      </div>
    </Layout>
  )
}

export default News