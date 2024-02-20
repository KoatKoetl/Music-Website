import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";

const Poster = () => {
  return (
    <div className="flex min-w-[250px] max-w-[650px] flex-1 flex-col items-center justify-center bg-dark-gray p-2 shadow-poster lil:min-w-[435px] sm:p-4 md:min-w-[650px]">
      <a href="https://en.wikipedia.org/wiki/Kino_(band)" target="blank">
        <h3 className="text-center font-bold leading-[1] tracking-tighter [font-size:_clamp(2em,30vw,13em)] md:text-[13rem] md:leading-[180px]">
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
