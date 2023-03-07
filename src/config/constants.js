const DEV_MODE = true;
export const API_BASE = DEV_MODE === true?'http://localhost:8000/api/v1':'';
export const API_URL = DEV_MODE === true ? 'http://localhost:8000/' : 'http://103.179.142.70:8000/';