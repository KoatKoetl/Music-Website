import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyAudioPlayer from "./audioPlayer";

const AlbumCover = ({ index, song }) => {
  return (
    <div className="relative mr-2 grid size-16 items-center justify-center">
      <span className="absolute left-1 top-0 z-10 font-bold">{index + 1}</span>
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
    <div className="flex min-w-[250px] max-w-[300px] flex-1 flex-col justify-center">
      <h5 className="font-semibold">{song.title}</h5>
      <h6 className="opacity-80 hover:opacity-100">
        <span className="font-semibold">Band: </span>KINO
      </h6>
    </div>
  );
};

SongInfo.propTypes = {
  song: PropTypes.object,
};

const FullSongLink = ({ song }) => {
  return (
    <div className="flex items-center justify-center px-4">
      <a
        href={song.link}
        className="whitespace-break-spaces text-center opacity-80 hover:opacity-100 hover:drop-shadow-font-shadow-2"
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
    <li className="rounded-sm ">
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
