import { handleResponse } from "../utils";
import axios from "axios";
import { API_BASE } from "../config/constants";

export const getDefiFee = async (page, showCount) => {
  const response = await axios.get(
    `${API_BASE}/defi/getfee?page=${page}&pageSize=${showCount}`
  );
  return response.data;
};

export const getDefiYield = async (page, showCount) => {
  const response = await axios.get(
    `${API_BASE}/defi/getyield?page=${page}&pageSize=${showCount}`
  );
  return response.data;
};