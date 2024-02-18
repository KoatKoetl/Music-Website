import "react-lazy-load-image-component/src/effects/blur.css";
import SongList from "./SongList";

const PlayList = () => {
  return (
    <div className="min-w-[600px] max-w-[1150px] flex-1">
      <h3 className="mb-6 text-center text-4xl font-semibold">
        Playlist from Deezer
      </h3>
      <SongList />
    </div>
  );
};

export default PlayList;
