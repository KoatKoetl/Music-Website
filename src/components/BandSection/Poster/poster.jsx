import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";

const Poster = () => {
  return (
    <div className="max-h-[850px] max-w-[650px] flex-1 bg-dark-gray p-4 shadow-poster">
      <a href="https://en.wikipedia.org/wiki/Kino_(band)" target="blank">
        <h3 className="text-center text-[13rem] font-bold leading-[180px] tracking-tighter">
          К<span className="font-normal">И</span>НО
        </h3>
      </a>
      <BandMembersPhoto />
      <div className="flex flex-wrap justify-center md:justify-normal">
        <BandMembersList />
        <Albums />
      </div>
    </div>
  );
};

export default Poster;
