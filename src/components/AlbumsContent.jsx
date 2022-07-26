import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

export default function AlbumsContent({ loading, items }) {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative pt-24">
      <div className="p-5 flex flex-row flex-wrap justify-center items-center md:items-start">
        {items.map((item) => (
          <img
            className="mb-5 rounded max-w-[80%] md:max-w-[45%] md:mr-3 shadow-sm shadow-black"
            key={item.photo_key}
            src={item.url}
          ></img>
        ))}
      </div>
    </div>
  );
}

AlbumsContent.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      photo_key: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

AlbumsContent.defaultProps = {
  loading: false,
  items: [],
};
