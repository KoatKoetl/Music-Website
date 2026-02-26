import axios from "axios";

const apiKEY = import.meta.env.VITE_API_KEY;
const apiURL = import.meta.env.VITE_API_URL;
const apiHOST = import.meta.env.VITE_API_HOST;
const corsProxy = import.meta.env.VITE_CORS_PROXY || "";

const API_URL = apiURL;
const API_KEY = apiKEY;
const API_Host = apiHOST;
const CORS_PROXY = corsProxy;

const API_Call = async (endpoint, method = "GET", params = {}) => {
  const headers = {
    "x-rapidapi-host": API_Host,
    "X-RapidAPI-Key": API_KEY,
  };

  try {
    const response = await axios({
      method,
      url: `${CORS_PROXY}${API_URL}/${endpoint}`,
      headers,
      params,
    });

    return response.data.tracks;
  } catch (err) {
    console.log("API error: " + err);
    throw err;
  }
};

export default API_Call;
