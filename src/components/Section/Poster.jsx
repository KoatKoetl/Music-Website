import BandMembersPhoto from "./Poster/BandMembersPhoto";
import BandMembersList from "./Poster/MembersList";
import Albums from "./Poster/AlbumsCarousel";

const Poster = ({ posterData }) => {
  const {
    bandName,
    name_styles,
    aria_label,
    bandMembersPhoto,
    poster_styles,
    bandMembersList,
    albums,
  } = posterData;

  return (
    <section className={`${poster_styles}`} aria-label={aria_label}>
      <h3 className={`${name_styles}`}>{bandName}</h3>
      <BandMembersPhoto membersPhoto={bandMembersPhoto} />
      <div className="flex flex-wrap justify-center md:justify-normal">
        <BandMembersList bandMembers={bandMembersList} />
        <Albums albums={albums} />
      </div>
    </section>
  );
};

export default Poster;
