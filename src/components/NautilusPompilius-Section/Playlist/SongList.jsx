import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useAPI from "../../useDeezerAPI";
import ListItem from "./ListItem";

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
        <label htmlFor="searchInput-Nautilus" className="text-lg font-semibold">
          Search Music:{" "}
        </label>
        <input
          type="text"
          id="searchInput-Nautilus"
          value={searchInput}
          onChange={handleSearch}
          className="max-w-[400px] border-b-2 bg-transparent indent-1 transition-colors placeholder:text-white placeholder:opacity-85 focus-visible:border-dark-blue focus-visible:outline-none"
          placeholder="Song Name..."
          autoComplete="off"
        />
      </div>

      <ul className="h-[350px] overflow-x-hidden overflow-y-scroll sm:h-[400px] xl:h-[800px]">
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
  const { playList, loading } = useAPI("playlist/9677186642");

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
