import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";

const Poster = () => {
  return (
    <section
      className="flex min-w-[250px] max-w-[650px] flex-1 rotate-[20deg] -skew-x-6 -skew-y-12 scale-50 transform-gpu flex-col items-center justify-center bg-dark-gray p-2 shadow-poster transition-all duration-1000 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 lil:min-w-[435px] sm:p-4 md:min-w-[650px]"
      aria-label="custom made KINO band poster"
    >
      <h3 className="text-center font-bold leading-[1] tracking-tighter [font-size:_clamp(2em,30vw,13em)] md:text-[13rem] md:leading-[180px]">
        К<span className="font-normal">И</span>НО
      </h3>
      <BandMembersPhoto />
      <div className="flex flex-wrap justify-center md:justify-normal">
        <BandMembersList />
        <Albums />
      </div>
    </section>
  );
};

export default Poster;
