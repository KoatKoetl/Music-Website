import Poster from "./Poster/poster";
import PlayList from "./playList";

const BandSection = () => {
  return (
    <section className="font-Rubik">
      <div className="flex flex-wrap items-center justify-center gap-4 bg-dark-pink p-5 xl:items-start xl:justify-normal 2xl:justify-center 2xl:py-10">
        <Poster />
        <PlayList />
      </div>
    </section>
  );
};

export default BandSection;
