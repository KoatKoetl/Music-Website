import PlayList from "./Playlist/playList";
import Poster from "./Poster/poster";

const BandSection = () => {
  return (
    <section className="font-Rubik">
      <div className="flex flex-wrap justify-center gap-12 bg-dark-pink p-3 lil:p-5 2xl:py-10">
        <Poster />
        <PlayList />
      </div>
    </section>
  );
};

export default BandSection;
