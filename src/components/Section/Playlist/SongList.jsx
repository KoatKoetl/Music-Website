import PropTypes from "prop-types";
import { useEffect, useState, useCallback, useMemo } from "react";
import useAPI from "../../useDeezerAPI";
import ListItem from "./ListItem";

const SONGS_PER_PAGE = 10;

// Function to search for music by partial name
const searchMusicByPartialName = (musicArray, partialName) => {
  partialName = partialName.toLowerCase();
  return musicArray.filter((music) =>
    music.title.toLowerCase().includes(partialName),
  );
};

// Extract unique album covers from playlist data
const extractUniqueAlbumCovers = (musicArray) => {
  if (!musicArray || musicArray.length === 0) return [];

  const seenAlbums = new Set();
  const uniqueCovers = [];

  for (const song of musicArray) {
    const album = song.album;
    if (!album || !album.cover) continue;

    // Use album ID as primary key, title as fallback
    const albumKey = album.id ?? `title_${album.title?.toLowerCase().trim()}`;

    if (!seenAlbums.has(albumKey)) {
      seenAlbums.add(albumKey);
      uniqueCovers.push(album.cover);
    }
  }

  return uniqueCovers;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded px-3 py-1 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-30 hover:bg-white/10"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="rounded px-3 py-1 text-sm font-semibold transition-colors hover:bg-white/10"
            aria-label="Page 1"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 text-sm opacity-60">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded px-3 py-1 text-sm font-semibold transition-colors hover:bg-white/10 ${
            page === currentPage ? "bg-dark-blue text-white" : ""
          }`}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-sm opacity-60">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="rounded px-3 py-1 text-sm font-semibold transition-colors hover:bg-white/10"
            aria-label={`Page ${totalPages}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded px-3 py-1 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-30 hover:bg-white/10"
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

const MusicSearch = ({ musicArray, bandName }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearchResults(searchMusicByPartialName(musicArray, searchInput));
    setCurrentPage(1); // Reset to first page on new search
  }, [musicArray, searchInput]);

  const handleSearch = (event) => {
    const partialName = event.target.value;
    setSearchInput(partialName);
  };

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Paginate results
  const paginatedSongs = useMemo(() => {
    const songs = searchResults.length > 0 ? searchResults : musicArray;
    const startIndex = (currentPage - 1) * SONGS_PER_PAGE;
    const endIndex = startIndex + SONGS_PER_PAGE;
    return songs.slice(startIndex, endIndex);
  }, [searchResults, musicArray, currentPage]);

  const totalPages = Math.ceil(
    (searchResults.length > 0 ? searchResults : musicArray).length / SONGS_PER_PAGE
  );

  const showingStart = (currentPage - 1) * SONGS_PER_PAGE + 1;
  const showingEnd = Math.min(currentPage * SONGS_PER_PAGE, (searchResults.length > 0 ? searchResults : musicArray).length);

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

      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm opacity-80">
          Showing {searchResults.length > 0 ? `${showingStart}-${showingEnd} of ${searchResults.length}` : `${showingStart}-${showingEnd} of ${musicArray.length}`} songs
        </p>
        {searchResults.length > 0 && (
          <button
            onClick={() => setSearchInput("")}
            className="text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            Clear search
          </button>
        )}
      </div>

      <ul className="min-h-[400px] sm:min-h-[450px]">
        {paginatedSongs.map((song, index) => (
          <ListItem
            key={song.id}
            index={(currentPage - 1) * SONGS_PER_PAGE + index}
            song={song}
            bandName={bandName}
          />
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

MusicSearch.propTypes = {
  musicArray: PropTypes.array,
  bandName: PropTypes.string,
};

const SongList = ({ playlistID, bandName, onAlbumCoversFetch }) => {
  const { playList, loading, error } = useAPI(`playlist/${playlistID}`);

  // Extract and send album covers to parent when playlist loads
  useEffect(() => {
    if (playList && playList.length > 0 && onAlbumCoversFetch) {
      const uniqueCovers = extractUniqueAlbumCovers(playList);
      if (uniqueCovers.length > 0) {
        onAlbumCoversFetch(uniqueCovers);
      }
    }
  }, [playList, onAlbumCoversFetch]);

  // Check for errors
  if (error) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-red-400">
        <p className="text-lg font-semibold">Failed to load playlist</p>
        <p className="text-sm opacity-80">{error}</p>
      </div>
    );
  }

  // Check onLoading
  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="animate-pulse">Loading playlist...</div>
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
      <MusicSearch musicArray={playList} bandName={bandName} />
    </>
  );
};

SongList.propTypes = {
  playlistID: PropTypes.string.isRequired,
  bandName: PropTypes.string,
  onAlbumCoversFetch: PropTypes.func,
};

export default SongList;
