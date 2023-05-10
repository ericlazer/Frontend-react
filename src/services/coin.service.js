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