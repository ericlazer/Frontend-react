import { handleResponse } from '../utils';
import axios from 'axios';
import { API_BASE } from '../config/constants';

const getIntheBlockCoinData = async (coinName) => {

  const response = await axios.get(`${API_BASE}/coin/${coinName}`);
  // const coinData = await handleResponse(response);
  return response.data;
}

export const coinService = {
  getIntheBlockCoinData,
}