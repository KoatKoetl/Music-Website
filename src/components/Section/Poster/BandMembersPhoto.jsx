import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BandMembersPhoto = ({ membersPhoto }) => {
  const { src, alt, styles, effect, placeholderSrc } = membersPhoto;

  // Band Members image props
  const bandPhotoProps = {
    src: src,
    alt: alt,
    styles: styles,
    effect: effect,
    placeholderSrc: placeholderSrc,
  };

  return (
    <div className="relative flex min-w-[250px] max-w-[600px] flex-1 items-center justify-center lil:min-w-[400px]">
      <LazyLoadImage {...bandPhotoProps} className="h-full w-full" />
    </div>
  );
};

export default BandMembersPhoto;
