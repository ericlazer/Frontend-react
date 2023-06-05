import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Influencers from '../../../components/Coins/Influencers';
import Feeds from './Feeds';

const CoinSocial = () => {

  const [category, setCategory] = useState(0);

  return (
    <Layout>
      <div>
        <div className="flex gap-6 items-center">
          <span className="text-xl text-white">Coins</span>
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
              Feeds
            </div>
          </div>
        </div>
        <div>
          {category === 0 && <Influencers />}
          {category === 1 && <Feeds />}
        </div>
      </div>
    </Layout>
  )
}

export default CoinSocial