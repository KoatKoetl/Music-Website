import { useEffect, useState } from "react";
import API_Call from "/src/utils/API/Deezer_API.jsx";

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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchPlaylist();
  }, [endpoint]);

  return { playList, loading };
};

export default useAPI;
