import "react-lazy-load-image-component/src/effects/blur.css";
import SongList from "./SongList";

const PlayList = () => {
  return (
    <div className="min-w-[250px] max-w-[1200px] flex-1 sm:min-w-[600px]">
      <h3 className="mb-2 text-center text-3xl font-semibold sm:text-4xl">
        Playlist from Deezer
      </h3>
      <SongList />
    </div>
  );
};

export default PlayList;
