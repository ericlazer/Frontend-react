const DEV_MODE = true;
export const API_BASE =
  DEV_MODE === true ? "http://192.168.123.29:5000/api" : "/api";
export const API_URL = DEV_MODE === true ? "http://192.168.123.29:5000/" : "/";