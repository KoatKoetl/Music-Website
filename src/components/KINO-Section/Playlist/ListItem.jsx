import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyAudioPlayer from "./audioPlayer";

const AlbumCover = ({ index, song }) => {
  return (
    <div className="relative mr-2 grid size-12 object-center sm:size-16">
      <span className="absolute bottom-0 left-1 z-10 flex items-center justify-center rounded-sm bg-black bg-opacity-60 text-sm font-semibold sm:text-lg">
        {index + 1}
      </span>
      <LazyLoadImage
        effect="blur"
        key={song.id}
        src={song.album.cover}
        alt={"Song " + song.title + " cover image"}
        threshold={300}
        className="rounded-sm"
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
    <div className="flex min-w-[100px] max-w-[300px] flex-1 flex-col justify-center lil:min-w-[250px] sm:min-w-[200px]">
      <h5 className="text-sm font-semibold sm:text-base">{song.title}</h5>
      <h6 className="mediaPointer:hover:opacity-100 mediaTouch:active:opacity-100 text-sm opacity-80 transition-all sm:text-base">
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
    <div className="flex flex-1 items-center justify-center sm:px-4 md:flex-none">
      <a
        href={song.link}
        className="mediaPointer:hover:opacity-100 mediaTouch:active:opacity-100 mediaPointer:hover:drop-shadow-font-shadow-2 mediaTouch:active:drop-shadow-font-shadow-2 text-center text-sm opacity-80 transition-all sm:text-base"
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
    <li className="border-b-2 border-dark-gray border-opacity-50 py-2 last:border-none">
      <div className="flex flex-wrap">
        <AlbumCover index={index} song={song} />
        <SongInfo song={song} />
        <FullSongLink song={song} />
        <LazyAudioPlayer src={song.preview} />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default ListItem;