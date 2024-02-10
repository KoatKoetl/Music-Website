import Albums from "./albumsCarousel";
import BandMembersList from "./bandMembersList";
import BandMembersPhoto from "./bandMembersPhoto";
import bandPhoto from "/src/assets/images/band-KINO.webp";

const Poster = () => {
  // Band Members image props
  const bandPhotoProps = {
    src: bandPhoto,
    alt: "photo in black and white of band KINO",
    styles: "justify-self-center rounded-lg",
    width: 600,
  };

  return (
    <div className="flex bg-dark-pink px-16 py-10">
      <div className="max-w-[650px] bg-dark-gray p-4 shadow-poster">
        <a href="https://en.wikipedia.org/wiki/Kino_(band)" target="blank">
          <h3 className="text-center text-[13rem] font-bold leading-[180px] tracking-tighter">
            К<span className="font-normal">И</span>НО
          </h3>
        </a>
        <BandMembersPhoto imageProps={bandPhotoProps} />
        <div className="flex flex-wrap justify-center md:justify-normal">
          <BandMembersList />
          <Albums />
        </div>
      </div>
    </div>
  );
};

export default Poster;
