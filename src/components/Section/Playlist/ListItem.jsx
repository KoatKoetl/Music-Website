import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyAudioPlayer from "../../../utils/LazyAudioPlayer";
import AudioPlayer from "../Playlist/audioPlayer";

const AlbumCover = ({ index, song }) => {
  return (
    <div className="relative z-10 mr-2 grid size-12 object-center sm:size-16">
      <span className="absolute bottom-0 z-10 flex items-center justify-center rounded-bl-sm rounded-tr-sm bg-black bg-opacity-60 px-1 text-sm font-bold sm:text-lg sm:leading-normal">
        {index + 1}
      </span>
      <LazyLoadImage
        effect="blur"
        key={song.id}
        src={song.album.cover}
        alt={"Song " + song.title + " cover image"}
        threshold={300}
      />
    </div>
  );
};

AlbumCover.propTypes = {
  index: PropTypes.number,
  song: PropTypes.object,
};

const SongInfo = ({ song, bandName }) => {
  return (
    <div className="z-10 flex min-w-[100px] max-w-[300px] flex-1 flex-col justify-center lil:min-w-[250px] sm:min-w-[200px]">
      <h5
        className="text-sm font-semibold sm:text-base"
        aria-label="song title"
      >
        {song.title}
      </h5>
      <h6
        className="text-sm opacity-80 sm:text-base"
        aria-label="band name"
      >
        <span className="font-semibold ">Band: </span>{bandName || song.artist?.name}
      </h6>
    </div>
  );
};

SongInfo.propTypes = {
  song: PropTypes.object,
  bandName: PropTypes.string,
};

const FullSongLink = ({ song }) => {
  return (
    <div className="z-10 flex flex-1 items-center justify-center sm:px-4 md:flex-none">
      <a
        href={song.link}
        className="text-center text-sm opacity-80 transition-opacity hover:opacity-100 sm:text-base"
        target="blank"
        rel="noopener noreferrer"
      >
        <h5>
          <strong>Deezer</strong>
          <br />
          Full song
        </h5>
      </a>
    </div>
  );
};

FullSongLink.propTypes = {
  song: PropTypes.object,
};

const ListItem = ({ song, index, bandName }) => {
  return (
    <li className="group relative border-b-2 border-dark-blue border-opacity-80 py-1 last:border-none">
      <div className="flex flex-wrap transition-colors group-hover:bg-white/5">
        <AlbumCover index={index} song={song} />
        <SongInfo song={song} bandName={bandName} />
        <FullSongLink song={song} />
        <LazyAudioPlayer
          src={song.preview}
          songId={song.id}
          AudioPlayerComponent={AudioPlayer}
        />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
  bandName: PropTypes.string,
};

export default ListItem;
