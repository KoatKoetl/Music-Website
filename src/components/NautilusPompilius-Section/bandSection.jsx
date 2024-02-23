import PlayList from "./Playlist/playList";
import Poster from "./Poster/poster";

const BandSection = () => {
  return (
    <section className="font-PlayfarDisplay" id="Nautilus">
      <div className="flex flex-wrap justify-center gap-12 bg-black p-3 lil:p-5 2xl:py-10">
        <Poster />
        <PlayList />
      </div>
    </section>
  );
};

export default BandSection;
