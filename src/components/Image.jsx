import PropTypes from "prop-types";
function Image({ imgUrl, imgAlt }) {
  return (
    <img
      src={imgUrl ? imgUrl : ""}
      className='object-fill rounded-lg'
      alt={imgAlt}
    />
  );
}

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default Image;
