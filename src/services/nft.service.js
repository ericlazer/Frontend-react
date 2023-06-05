import axios from "axios";
import { API_BASE } from "../config/constants";

export const getNFTInfluencers = async (timeRange) => {
  const response = await axios.get(`${API_BASE}/nft/influencers?interval=${timeRange}`);
  return response.data;
};

export const getNFTSocialRanks = async () => {
  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get(`https://lunarcrush.com/api3/nfts/insights?limit=50`, config);
  console.log(response.data)
  return response.data;
};

export const getNFTMarketplace = async (timeRange) => {

  const response = await axios.get(`${API_BASE}/nft/marketplace?timeRange=${timeRange}`)
  return response.data;

}

export const getNFTCollection = async () => {

  const response = await axios.get(`${API_BASE}/nft/collection`)
  return response.data;

}

export const getNFTMarketCap = async () => {

  const response = await axios.get(`${API_BASE}/nft/marketcap`)
  return response.data;

}

export const getNFTTrade = async () => {

  const response = await axios.get(`${API_BASE}/nft/trade`)
  return response.data;

}

export const getNFTGas = async () => {

  const response = await axios.get(`${API_BASE}/nft/gas`)
  return response.data;

}

export const getNFTTraders = async () => {

  const response = await axios.get(`${API_BASE}/nft/traders`)
  return response.data;

}

export const getNFTTradersWallet = async () => {

  const response = await axios.get(`${API_BASE}/nft/trader_wallet`)
  return response.data;

}

export const getWalletTrading = async () => {

  const response = await axios.get(`${API_BASE}/nft/wallet_trade`)
  return response.data;

}

export const getNFTMintRank = async () => {

  const response = await axios.get(`${API_BASE}/nft/mint_rank`)
  return response.data;

}

export const getNFTMintAmount = async () => {

  const response = await axios.get(`${API_BASE}/nft/mint_amount`)
  return response.data;

}

export const getSolanaNFTRank = async () => {

  const response = await axios.get(`${API_BASE}/nft/sol_rank`)
  return response.data;

}

export const getAptosNFTRank = async () => {

  const response = await axios.get(`${API_BASE}/nft/apt_rank`)
  return response.data;

}