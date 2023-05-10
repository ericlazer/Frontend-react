import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import NFTListBox from '../../components/NFT/NFTListBox'
import XBox from '../../components/XBox'
import { TopCollections, TopMarketPlaces, TrendCollections, Mints, CrossChains, TopTraders } from './data'

const NFT = () => {

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <Link to="/nft/top">
          <XBox isBackground={true} header="Top Collections">
            {
              TopCollections.map((item, index) => (
                <NFTListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  networks={item.networks}
                  price={item.volume}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link to="/nft/marketplace">
          <XBox isBackground={true} header="MarketPlaces">
            {
              TopMarketPlaces.map((item, index) => (
                <NFTListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  networks={item.networks}
                  price={item.volume}
                  changed={item.changed}
                />
              ))
            }
            <div className="absolute inset-0 flex items-center justify-center font-semibold">
              <span className="font-semibold px-5 py-2 bg-gray-800 rounded-full">
                MarketPlaces
              </span>
            </div>
          </XBox>
        </Link>
        <Link to="/nft/trending">
          <XBox isBackground={true} header="Trending Collections">
            {
              TrendCollections.map((item, index) => (
                <NFTListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  networks={item.networks}
                  price={item.volume}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link to="/nft/livemint">
          <XBox isBackground={true} header="Live Mints">
            {
              Mints.map((item, index) => (
                <NFTListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  price={item.volume}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link to="/nft/crosschain">
          <XBox isBackground={true} header="Cross-Chain">
            {
              CrossChains.map((item, index) => (
                <NFTListBox
                  key={index}
                  imgURL={item.imgURL}
                  name={item.name}
                  price={item.value}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
        <Link to="/nft/trader">
          <XBox isBackground={true} header="Top Traders">
            {
              TopTraders.map((item, index) => (
                <NFTListBox
                  key={index}
                  name={item.name}
                  networks={item.networks}
                  price={item.value}
                  changed={item.changed}
                />
              ))
            }
          </XBox>
        </Link>
      </div>
    </Layout>
  )
}

export default NFT