import { handleResponse } from '../utils';
import axios from 'axios';
import { API_BASE } from '../config/constants';

export const getIntheBlockCoinData = async (coinName) => {

  const response = await axios.get(`${API_BASE}/coin/${coinName}`);
  // const coinData = await handleResponse(response);
  return response.data;
}

export const getTotalGainers = async () => {
  const response = await axios.get(`${API_BASE}/coin/total_gainers`);
  return response.data;
}

export const getTotalLosers = async () => {
  const response = await axios.get(`${API_BASE}/coin/total_losers`);
  return response.data;
}

export const getTopCoins = async () => {
  const response = await axios.get(`${API_BASE}/coin/ranks`)
  return response.data;
}

export const getInfluencers = async (timeRange) => {
  const response = await axios.get(`${API_BASE}/coin/influencers?interval=${timeRange}`)
  return response.data;
}

export const getInfluencerProfile = async (influencer) => {
  const response = await axios.get(`${API_BASE}/coin/influencers/${influencer}`);
  return response.data;
}

export const getCoinProfile = async (coinName) => {
  const response = await axios.get(`${API_BASE}/coin/${coinName}`)
  return response.data.coin;
}

export const getCryptoFeeds = async () => {

  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get('https://lunarcrush.com/api3/feeds?limit=100&sources=news&market=coins', config);
  return response.data.data;
}