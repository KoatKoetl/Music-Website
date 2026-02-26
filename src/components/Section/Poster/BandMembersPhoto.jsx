import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BandMembersPhoto = ({ membersPhoto }) => {
  const { src, alt, styles, effect, placeholderSrc } = membersPhoto;

  return (
    <div className="relative flex min-w-[250px] max-w-[600px] flex-1 items-center justify-center lil:min-w-[400px]">
      <LazyLoadImage
        src={src}
        alt={alt}
        className={`h-full w-full ${styles || ""}`}
        effect={effect || "blur"}
        placeholderSrc={placeholderSrc}
      />
    </div>
  );
};

export default BandMembersPhoto;
