import axios from 'axios';
import { API_BASE } from '../config/constants';

export const getTopNews = async () => {

  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get('https://lunarcrush.com/api3/feeds?limit=100&sources=news', config);
  return response.data.data;
}

export const getTwitterNews = async () => {

  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get('https://lunarcrush.com/api3/feeds?limit=100&sources=twitter', config);
  return response.data.data;
}

export const getRedditNews = async () => {

  const config = {
    headers: {
      'Authorization': 'Bearer 2fwfdjua4rtsmym2o7u7t9iludli30wel5eufeu3'
    }
  }

  const response = await axios.get('https://lunarcrush.com/api3/feeds?limit=100&sources=reddit', config);
  return response.data.data;
}
