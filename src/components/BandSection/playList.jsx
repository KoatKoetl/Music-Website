import { useEffect, useState } from "react";
import API_Call from "../../utils/API/Deezer_API";

const PlayList = () => {
  const [playList, setPlayList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await API_Call("playlist/10674002782");
        console.log(data.data);
        setPlayList(data.data);
      } catch (err) {
        console.log(err);
        throw err;
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchPlaylist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playList && playList.length === 0) {
    return <div>No playlist data found.</div>;
  }

  return (
    <>
      <div className="p-6">
        <ul className="h-[200px] w-[400px] overflow-scroll">
          {playList.map((track) => (
            <li key={track.id}>{track.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlayList;
