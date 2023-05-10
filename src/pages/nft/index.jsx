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

const TrendCollections = [
  {
    name: "Azuki",
    imgURL: "/img/nfts/azuki.jpg",
    networks: ["Ethereum"],
    volume: "14.00ETH",
    changed: 2.2,
  },
  {
    name: "Pixelady Marker",
    imgURL: "/img/nfts/pixelady.jpg",
    volume: "0.19ETH",
    networks: ["Ethereum"],
    changed: 8.2,
  },
  {
    name: "Mad Lads",
    imgURL: "/img/nfts/madlads.jpg",
    volume: "14.4K SOL",
    networks: ["Solana"],
    changed: -3.41,
  },
  {
    name: "Famous Fox Federation",
    imgURL: "/img/nfts/famousfox.jpg",
    volume: "4564SOL",
    networks: ["Solana"],
    changed: -25.52,
  },
  {
    name: "Bitcoin Frogs",
    imgURL: "/img/nfts/bitcoinfrog.jpg",
    volume: "32ETH",
    networks: ["Ethereum"],
    changed: 13.21,
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

const TopTraders = [
  {
    name: "0x577eBC",
    networks: ["Ethereum"],
    value: 1900,
    changed: 34.4,
  },
  {
    name: "wilcox.eth",
    networks: ["Ethereum"],
    value: 313.48,
    changed: -11.26,
  },
  {
    name: "0x6611fE",
    networks: ["Ethereum"],
    value: 655.94,
    changed: 117.28,
  },
  {
    name: "0x223BC8",
    networks: ["Ethereum"],
    value: 0,
    changed: -10.52,
  },
  {
    name: "0x6F4A2d",
    networks: ["Ethereum"],
    value: 1130,
    changed: 27.27,
  }
]

const CrossChains = [
  {
    name: "Ethereum",
    imgURL: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/eth.png",
    value: 34992164,
    changed: 2.10,
  },
  {
    name: "Mythos Chain",
    imgURL: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/_myth.png",
    value: 1604052,
    changed: 1.78,
  },
  {
    name: "Solana",
    imgURL: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/sol.png",
    value: 1192192,
    changed: 2.10,
  },
  {
    name: "Polygon",
    imgURL: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/matic.png",
    value: 889767,
    changed: 2.10,
  },
  {
    name: "ImmutableX",
    imgURL: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/_imx.png",
    value: 754840,
    changed: 1.91,
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