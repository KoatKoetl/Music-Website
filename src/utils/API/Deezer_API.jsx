import axios from "axios";

const API_URL = "https://deezerdevs-deezer.p.rapidapi.com";
const API_KEY = "10b9b220admsh8993db319d364ebp1e3400jsn7446c612bf49";
const API_Host = "deezerdevs-deezer.p.rapidapi.com";

const API_Call = async (endpoint, method = "GET", params = {}) => {
  const headers = {
    "x-rapidapi-host": API_Host,
    "X-RapidAPI-Key": API_KEY,
  };

  try {
    const response = await axios({
      method,
      url: `${API_URL}/${endpoint}`,
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
