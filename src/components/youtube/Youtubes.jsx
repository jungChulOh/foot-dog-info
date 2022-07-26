import React from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";
import YoutubeItem from "./YoutubeItem";

export default function Youtubes({ loading, items }) {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-3">
        {items.map((item) => {
          const { id } = item;
          const { videoId } = id;
          const { title, publishedAt } = item.snippet;
          return (
            <YoutubeItem
              key={videoId}
              videoId={videoId}
              title={title}
              publishedAt={publishedAt}
            />
          );
        })}
      </div>
    </div>
  );
}

Youtubes.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      videoId: PropTypes.string,
      title: PropTypes.string,
      publishedAt: PropTypes.string,
    })
  ),
};

Youtubes.defaultProps = {
  loading: false,
  items: [],
};
