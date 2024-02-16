import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AudioPlayer from "./audioPlayer";

const AlbumCover = ({ index, song }) => {
  return (
    <div className="relative size-20 screen-1400:size-24">
      <span className="absolute left-1 z-10 font-bold">{index + 1}</span>
      <LazyLoadImage
        effect="blur"
        key={song.id}
        src={song.album.cover}
        alt={"Song " + song.title + " cover image"}
        styles={"relative z-0 h-full w-full text-sm text-center"}
        width={96}
        height={96}
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
    <div className="flex flex-col justify-center">
      <h5 className="text-lg font-semibold screen-1400:text-2xl">
        {song.title}
      </h5>
      <h6 className="screen-1400:text-md text-sm opacity-80 hover:opacity-100">
        <span className="font-semibold">Artist name:</span> {song.artist.name}
      </h6>
      <h6 className="screen-1400:text-md text-sm opacity-80 hover:opacity-100">
        <span className="font-semibold">Album:</span> {song.album.title}
      </h6>
    </div>
  );
};

SongInfo.propTypes = {
  song: PropTypes.object,
};

const FullSongLink = ({ song }) => {
  return (
    <div className="flex min-w-[200px] flex-1 items-center justify-center">
      <a
        href={song.link}
        className="whitespace-break-spaces text-center hover:drop-shadow-font-shadow-2"
        target="blank"
      >
        <h5>
          <strong>Deezer</strong>
          <br />
          Click here and listen full song
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
    <li className="rounded-sm hover:bg-dark-gray hover:shadow-xl">
      <div className="flex flex-wrap gap-4 px-2 py-0.5">
        <AlbumCover index={index} song={song} />
        <SongInfo song={song} />
        <FullSongLink song={song} />
      </div>
      <div>
        <AudioPlayer src={song.preview} />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default ListItem;
