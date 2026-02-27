import  { useEffect, useState, useCallback } from "react";
import API_Call from "../utils/API/Deezer_API";

const MAX_RETRIES = 5;
const RETRY_DELAY = 1000; // 1 second delay between retries

const useAPI = (endpoint) => {
  const [playList, setPlayList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchWithRetry = useCallback(async () => {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const data = await API_Call(endpoint);
        if (!data || !data.data) {
          throw new Error("Invalid data received from API");
        }
        return data.data;
      } catch (err) {
        console.warn(
          `Attempt ${attempt}/${MAX_RETRIES} failed for endpoint ${endpoint}:`,
          err.message,
        );

        if (attempt === MAX_RETRIES) {
          throw err;
        }

        // Wait before retrying (exponential backoff)
        await new Promise((resolve) =>
          setTimeout(resolve, RETRY_DELAY * attempt),
        );
      }
    }
  }, [endpoint]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      setError(null);
      setRetryCount(0);

      try {
        const data = await fetchWithRetry();
        setPlayList(data);
      } catch (err) {
        console.error(`Failed to fetch playlist after ${MAX_RETRIES} retries:`, err);
        setError(err.message);
        setPlayList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [endpoint, fetchWithRetry]);

  return { playList, loading, error, retryCount };
};

export default useAPI;
