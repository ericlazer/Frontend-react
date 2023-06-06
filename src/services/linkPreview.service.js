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
