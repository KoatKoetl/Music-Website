import { useEffect, useState } from "react";
import API_Call from "../utils/API/Deezer_API";

const useAPI = (endpoint) => {
  const [playList, setPlayList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await API_Call(endpoint);
        setPlayList(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [endpoint]);

  return { playList, loading };
};

export default useAPI;
