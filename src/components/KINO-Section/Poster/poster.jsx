import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";

const Poster = () => {
  return (
    <section
      className="flex min-w-[250px] max-w-[650px] flex-1 rotate-[20deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-dark-gray p-2 shadow-poster transition-all duration-1000 focus-within:rotate-[360deg] focus-within:skew-x-0 focus-within:skew-y-0 focus-within:scale-100 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 lil:min-w-[435px] lil:-skew-x-6 lil:-skew-y-12 sm:p-4 md:min-w-[650px]"
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
