import React from "react";
import PropTypes from "prop-types";
import YoutubeCard from "./YoutubeCard";

export default function YoutubeItem({ videoId, title }) {
  return (
    <YoutubeCard>
      <iframe
        className="w-full aspect-video rounded-t border-1"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
      <p className="mt-4 px-4 text-gray-600 font-bold text-sm md:text-base">
        {title}
      </p>
      <div className="mt-4 text-right px-5">
        <a
          href={`https://youtu.be/${videoId}`}
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-red-600 rounded-xl text-white shadow-lg inline-block"
        >
          👉 Go Youtube
        </a>
      </div>
    </YoutubeCard>
  );
}

YoutubeItem.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
};

YoutubeItem.defaultProps = {
  videoId: "",
  title: "",
};
