import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bandPhoto from "/src/assets/images/band-KINO/band-KINO.webp";

const BandMembersPhoto = () => {
  // Band Members image props
  const bandPhotoProps = {
    src: bandPhoto,
    alt: "photo in black and white of band KINO",
    styles: "justify-self-center rounded-lg",
    effect: "blur",
    placeholderSrc: "band-KINO",
    width: 600,
    height: 370,
  };

  return (
    <div className="grid items-center justify-center">
      <LazyLoadImage {...bandPhotoProps} />
    </div>
  );
};

export default BandMembersPhoto;
