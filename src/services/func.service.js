import axios from "axios";
import { API_BASE } from "../config/constants";

export const getLinkPreview = async (url) => {

  try {
    const response = await axios.get(`${API_BASE}/func/link-preview?url=${url}`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}

export const getInvestments = async (page, pageSize) => {
  const response = await axios.get(`${API_BASE}/func/investments?page=${page}&pageSize=${pageSize}`)
  return response.data;
}

export const getActiveInvestors = async (page, pageSize) => {
  const response = await axios.get(`${API_BASE}/func/active_investors?page=${page}&pageSize=${pageSize}`)
  return response.data;
}

export const getVentures = async (page, pageSize) => {
  const response = await axios.get(`${API_BASE}/func/ventures?page=${page}&pageSize=${pageSize}`)
  return response.data;
}