import PropTypes from "prop-types";

const LazyLoadedImage = ({ url, alt, styles }) => {
  return <img src={url} alt={alt} className={styles} />;
};

LazyLoadedImage.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  styles: PropTypes.string,
};

export default LazyLoadedImage;
