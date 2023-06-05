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

export const getNFTFeeds = async () => {

  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get('https://lunarcrush.com/api3/feeds?limit=100&sources=news&market=nfts', config);
  return response.data.data;
}

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