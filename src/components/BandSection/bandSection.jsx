import PlayList from "./Playlist/playList";
import Poster from "./Poster/poster";

const BandSection = () => {
  return (
    <section className="font-Rubik">
      <div className="flex flex-wrap items-center justify-center gap-12 bg-dark-pink p-5 xl:items-start xl:justify-normal 2xl:justify-center 2xl:py-10">
        <Poster />
        <PlayList />
      </div>
    </section>
  );
};

export default BandSection;
