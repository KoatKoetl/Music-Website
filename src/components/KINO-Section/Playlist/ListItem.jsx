import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyAudioPlayer from "../../../utils/LazyAudioPlayer";
import AudioPlayer from "../Playlist/audioPlayer";

const AlbumCover = ({ index, song }) => {
  return (
    <div className="relative z-10 mr-2 grid size-12 object-center sm:size-16">
      <span className="absolute bottom-0 z-10 flex items-center justify-center rounded-bl-sm rounded-tr-sm bg-black bg-opacity-60 px-1 text-sm font-semibold sm:text-base">
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

const SongInfo = ({ song }) => {
  return (
    <div className="z-10 flex min-w-[100px] max-w-[300px] flex-1 flex-col justify-center lil:min-w-[250px] sm:min-w-[200px]">
      <h5
        className="text-sm font-semibold sm:text-base"
        aria-label="song title"
      >
        {song.title}
      </h5>
      <h6
        className="text-sm opacity-80 transition-all sm:text-base mediaPointer:hover:opacity-100 mediaTouch:active:opacity-100"
        aria-label="band name"
      >
        <span className="font-semibold ">Band: </span>KINO
      </h6>
    </div>
  );
};

SongInfo.propTypes = {
  song: PropTypes.object,
};

const FullSongLink = ({ song }) => {
  return (
    <div className="z-10 flex flex-1 items-center justify-center sm:px-4 md:flex-none">
      <a
        href={song.link}
        className="text-center text-sm opacity-80 transition-all sm:text-base mediaPointer:hover:opacity-100 mediaPointer:hover:drop-shadow-font-shadow-2 mediaTouch:active:opacity-100 mediaTouch:active:drop-shadow-font-shadow-2"
        target="blank"
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

const ListItem = ({ song, index }) => {
  return (
    <li className="relative z-10 ml-2 border-b-2 border-dark-gray border-opacity-50 bg-dark-pink py-1 last:border-none">
      <div className="flex flex-wrap before:absolute before:z-0 before:h-0 before:w-4 before:origin-left before:bg-dark-gray before:transition-transform before:duration-1000 sm:before:h-[64px] before:mediaPointer:hover:scale-x-[75]">
        <AlbumCover index={index} song={song} />
        <SongInfo song={song} />
        <FullSongLink song={song} />
        <LazyAudioPlayer
          src={song.preview}
          AudioPlayerComponent={AudioPlayer}
        />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default ListItem;
