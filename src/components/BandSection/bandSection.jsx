import Poster from "./Poster/poster";
import PlayList from "./playList";

const BandSection = () => {
  return (
    <section className="font-Rubik">
      <div className="flex flex-wrap bg-dark-pink px-16 py-10">
        <Poster />
        <PlayList />
      </div>
    </section>
  );
};

export default BandSection;
