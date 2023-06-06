import axios from "axios";
import { API_BASE } from "../config/constants";

export const getInfluencerProfile = async (influencer) => {
  const response = await axios.get(`${API_BASE}/coin/influencers/${influencer}`);
  return response.data;
}
