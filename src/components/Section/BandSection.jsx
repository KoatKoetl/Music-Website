import Poster from "./Poster";
import PlayList from "./Playlist/Playlist";

const BandSection = ({ bandData }) => {
  const { section_id, section_styles, poster, playlist } = bandData;

  return (
    <section id={section_id}>
      <div
        className={`flex flex-wrap justify-center gap-12 p-3 lil:p-5 2xl:py-10 ${section_styles}`}
      >
        <Poster posterData={poster} />
        <PlayList playlistData={playlist} />
      </div>
    </section>
  );
};

export default BandSection;
