import PropTypes from "prop-types";

const LazyLoadedImage = ({ src, alt, styles, width, height }) => {
  return (
    <img src={src} alt={alt} className={styles} width={width} height={height} />
  );
};

LazyLoadedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  styles: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

LazyLoadedImage.defaultProps = {
  src: "",
  alt: "",
  styles: "",
  width: 0,
  height: 0,
};

export default LazyLoadedImage;
