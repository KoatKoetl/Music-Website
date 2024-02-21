import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAPI from "../../useDeezerAPI";
import ListItem from "./ListItem";
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

// Function to search for music by partial name

const searchMusicByPartialName = (musicArray, partialName) => {
  partialName = partialName.toLowerCase();
  return musicArray.filter((music) =>
    music.title.toLowerCase().includes(partialName),
  );
};

const MusicSearch = ({ musicArray }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(searchMusicByPartialName(musicArray, searchInput));
  }, [musicArray, searchInput]);

  const handleSearch = (event) => {
    const partialName = event.target.value;
    setSearchInput(partialName);
  };

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="searchInput" className="text-lg font-semibold">
          Search Music:{" "}
        </label>
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearch}
          className="max-w-[400px] border-b-2 bg-transparent indent-1 placeholder:text-white placeholder:opacity-85"
          placeholder="Song Name..."
        />
      </div>

      <ul className="grid max-h-[350px] overflow-x-hidden overflow-y-scroll sm:max-h-[770px]">
        {searchResults.length > 0
          ? searchResults.map((music, index) => (
              <ListItem key={music.id} index={index} song={music} />
            ))
          : musicArray.map((song, index) => (
              <ListItem key={song.id} index={index} song={song} />
            ))}
      </ul>
    </div>
  );
};

MusicSearch.propTypes = {
  musicArray: PropTypes.array,
};

const SongList = () => {
  const { playList, loading } = useAPI("playlist/10674002782");

  // Check onLoading
  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        Loading...
      </div>
    );
  }

  // Check on missing data
  if (!playList || playList.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        No playlist data found.
      </div>
    );
  }

  return (
    <>
      <MusicSearch musicArray={playList} />
    </>
  );
};

export default SongList;
