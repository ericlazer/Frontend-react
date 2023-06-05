import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Influencers from './Influencers';
import Rank from './Rank'
import Feeds from './Feeds';

const NFTSocial = () => {

  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">NFT</span>
          <div className="flex gap-5 border-2 border-white/50 rounded-xl px-8 py-3 items-center">
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 0 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(0)}
            >
              Influencers
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 1 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(1)}
            >
              Social Rank
            </div>
            <div
              className={`text-white/50 cursor-pointer p-2 rounded-md transition hover:bg-gray-600 ${
                category === 2 && "!bg-button-hover"
                }`}
              onClick={() => setCategory(2)}
            >
              Feeds
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <Influencers />}
          {category === 1 && <Rank />}
          {category === 2 && <Feeds />}
        </div>
      </div>
    </Layout>
  )
}

export default NFTSocial