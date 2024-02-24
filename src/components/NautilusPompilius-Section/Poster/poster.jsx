import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";

const Poster = () => {
  return (
    <section
      className="shadow-inversePoster lil:skew-y-4 flex min-w-[250px] max-w-[650px] flex-1 -rotate-[20deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#1e3b7288] via-[#1e3b72b2] to-[#2a529894] p-2 shadow-gray-700 transition-all duration-1000 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 lil:min-w-[435px] lil:skew-x-12 sm:p-4 md:min-w-[650px]"
      aria-label="custom made Nautilus Pompilius band poster"
    >
      <h3 className="text-center font-bold leading-[1] tracking-tighter [font-size:_clamp(2em,16svw,7em)] md:text-[7rem]">
        NAUTILUS POMPILIUS
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
