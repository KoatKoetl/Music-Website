import { useEffect, useState } from "react";
import API_Call from "../../utils/API/Deezer_API";

// const mockAPI_DATA = [
//   {
//     id: 410639982,
//     readable: true,
//     title: "Просто хочешь ты знать",
//     title_short: "Просто хочешь ты знать",
//     link: "https://www.deezer.com/track/410639982",
//     duration: 208,
//     rank: 61806,
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       "https://cdns-preview-5.dzcdn.net/stream/c-5cfefa14ad6e3cc0e567b02bd839b8a9-3.mp3",
//     md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//     time_add: 1662218342,
//     artist: {
//       id: 4549736,
//       name: "Виктор Цой",
//       link: "https://www.deezer.com/artist/4549736",
//       tracklist: "https://api.deezer.com/artist/4549736/top?limit=50",
//       type: "artist",
//     },
//     album: {
//       id: 48811912,
//       title: "Виктор Цой и Группа Кино. Полная Дискография",
//       cover: "https://api.deezer.com/album/48811912/image",
//       cover_small:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/56x56-000000-80-0-0.jpg",
//       cover_medium:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/250x250-000000-80-0-0.jpg",
//       cover_big:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/500x500-000000-80-0-0.jpg",
//       cover_xl:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/1000x1000-000000-80-0-0.jpg",
//       md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//       tracklist: "https://api.deezer.com/album/48811912/tracks",
//       type: "album",
//     },
//     type: "track",
//   },
//   {
//     id: 410640082,
//     readable: true,
//     title: "Солнечные дни",
//     title_short: "Солнечные дни",
//     link: "https://www.deezer.com/track/410640082",
//     duration: 192,
//     rank: 38585,
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       "https://cdns-preview-3.dzcdn.net/stream/c-36913027bdfa6e7872badb0ab97d0fb9-3.mp3",
//     md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//     time_add: 1662218342,
//     artist: {
//       id: 4549736,
//       name: "Виктор Цой",
//       link: "https://www.deezer.com/artist/4549736",
//       tracklist: "https://api.deezer.com/artist/4549736/top?limit=50",
//       type: "artist",
//     },
//     album: {
//       id: 48811912,
//       title: "Виктор Цой и Группа Кино. Полная Дискография",
//       cover: "https://api.deezer.com/album/48811912/image",
//       cover_small:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/56x56-000000-80-0-0.jpg",
//       cover_medium:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/250x250-000000-80-0-0.jpg",
//       cover_big:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/500x500-000000-80-0-0.jpg",
//       cover_xl:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/1000x1000-000000-80-0-0.jpg",
//       md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//       tracklist: "https://api.deezer.com/album/48811912/tracks",
//       type: "album",
//     },
//     type: "track",
//   },
// ];

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
    return (
      <div className="flex w-[850px] items-center justify-center p-6">
        Loading...
      </div>
    );
  }

  if (!playList && playList.length === 0) {
    return (
      <div className="flex w-[850px] items-center justify-center p-6">
        No playlist data found.
      </div>
    );
  }

  return (
    <div className="min-w-[300px] flex-1 p-6">
      <ul className="grid max-h-[800px] gap-4 overflow-scroll">
        {playList.map((track, index) => (
          <li
            key={track.id}
            className="flex gap-2 rounded-sm p-2 hover:bg-dark-gray hover:shadow-xl"
          >
            <div className="relative">
              <span className="absolute left-1 z-10 font-bold">
                {index + 1}
              </span>
              <img
                src={track.album.cover}
                alt={"Song" + track.title + "cover image"}
                className="relative z-0 size-24"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-2xl font-semibold">{track.title}</h5>
              <h6 className="text-md opacity-80 hover:opacity-100">
                <span className="font-semibold">Artist name:</span>{" "}
                {track.artist.name}
              </h6>
              <h6 className="text-md opacity-80 hover:opacity-100">
                <span className="font-semibold">Album:</span>{" "}
                {track.album.title}
              </h6>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Song preview</span>
              <audio controls>
                <source src={track.preview} type="audio/ogg" />
              </audio>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
