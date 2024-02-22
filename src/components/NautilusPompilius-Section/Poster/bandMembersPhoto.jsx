import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bandPhoto from "/src/assets/images/band-NautilusPompilius/band-NautilusPompilius.webp";

const BandMembersPhoto = () => {
  // Band Members image props
  const bandPhotoProps = {
    src: bandPhoto,
    alt: "photo in black and white of band Nautilus Pompilius",
    styles: "justify-self-center rounded-lg",
    effect: "blur",
    placeholderSrc: "band-NautilusPompilius",
  };

  return (
    <div className="relative flex min-w-[250px] max-w-[600px] flex-1 items-center justify-center lil:min-w-[400px]">
      <LazyLoadImage {...bandPhotoProps} className="h-full w-full" />
    </div>
  );
};

export default BandMembersPhoto;
