import PropTypes from "prop-types";
import { Suspense } from "react";
import LazyLoadedImage from "../LazyLoad/lazyLoadImage";

const BandMembersPhoto = ({ imageProps }) => {
  return (
    <div className="grid">
      <Suspense
        fallback={
          <div className="flex h-[250px] w-[600px] items-center justify-center">
            Loading...
          </div>
        }
      >
        <LazyLoadedImage {...imageProps} />
      </Suspense>
    </div>
  );
};

BandMembersPhoto.propTypes = {
  imageProps: PropTypes.object,
};

export default BandMembersPhoto;
