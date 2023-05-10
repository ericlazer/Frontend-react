import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import NFTListBox from '../../components/NFT/NFTListBox'
import XBox from '../../components/XBox'

const TopCollections = [
  {
    name: "Azuki",
    imgURL: "/img/nfts/azuki.jpg",
    networks: ["Ethereum"],
    volume: 4470000,
    changed: 34.4,
  },
  {
    name: "Mutant Ape Yacht Club",
    imgURL: "/img/nfts/mutantape.jpg",
    volume: 3820000,
    networks: ["Ethereum"],
    changed: -11.26,
  },
  {
    name: "DeGods",
    imgURL: "/img/nfts/degods.jpg",
    volume: 2900000,
    networks: ["Ethereum", "Solana"],
    changed: 117.28,
  },
  {
    name: "Bored Ape Yacht Club",
    imgURL: "/img/nfts/boredape.jpg",
    volume: 1430000,
    networks: ["Polygon", "Ethereum"],
    changed: -10.52,
  },
  {
    name: "CryptoPunks",
    imgURL: "/img/nfts/cryptopunks.jpg",
    volume: 1320000,
    networks: ["Ethereum"],
    changed: 27.27,
  }
]

const TopMarketPlaces = [
  {
    name: "Blur",
    imgURL: "/img/nfts/marketplace/blur.jpg",
    networks: ["Ethereum"],
    volume: 16450000,
    changed: 2.02,
  },
  {
    name: "OpenSea",
    imgURL: "/img/nfts/marketplace/opensea.jpg",
    networks: ["Ethereum", "Binance", "Polygon", "Avalanche", "Arbitrum", "Optimism", "Solana"],
    volume: 6200000,
    changed: 13.07,
  },
  {
    name: "Immutable X Marketplace",
    imgURL: "/img/nfts/marketplace/immutable.jpg",
    networks: ["immutable"],
    volume: 829490,
    changed: -9.06,
  },
  {
    name: "X2Y2",
    imgURL: "/img/nfts/marketplace/x2y2.jpg",
    networks: ["Ethereum"],
    volume: 540650,
    changed: 4.16,
  },
  {
    name: "JPG Store",
    imgURL: "/img/nfts/marketplace/jpgstore.jpg",
    networks: ["Cardano"],
    volume: 156490,
    changed: 27.26,
  }
]

const Mints = [
  {
    name: "mint.fun !fundrop pass",
    imgURL: "/img/nfts/mintfun.gif",
    volume: 4470000,
    changed: 34.4,
  },
  {
    name: "FlappyMoonbird",
    imgURL: "/img/nfts/flappybird.gif",
    volume: 3820000,
    changed: -11.26,
  },
  {
    name: "ENS",
    imgURL: "/img/nfts/ens.jpg",
    volume: 2900000,
    changed: 117.28,
  },
  {
    name: "NameWrapper",
    imgURL: "/img/nfts/ens.jpg",
    volume: 1430000,
    changed: -10.52,
  },
  {
    name: "Zeruib DNA 1.0",
    imgURL: "/img/nfts/zeriondna.jpg",
    volume: 1320000,
    changed: 27.27,
  }
]

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
          </XBox>
        </Link>
        <Link to="/nft/trader">
          <XBox isBackground={true} header="Top Traders">
          </XBox>
        </Link>
      </div>
    </Layout>
  )
}

export default NFT