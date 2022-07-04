import React from "react";
import PropTypes from "prop-types";

export default function YoutubeItemComponent({ videoId }) {
  return (
    <iframe
      className="w-full mb-3 md:w-[50%] md:p-3 md:mb-0 aspect-video"
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
}

YoutubeItemComponent.propTypes = {
  videoId: PropTypes.string,
};

YoutubeItemComponent.defaultProps = {
  videoId: "",
};
