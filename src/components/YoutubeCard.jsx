import React from "react";
import PropTypes from "prop-types";

export default function YoutubeCard({ children }) {
  return (
    <div className="relative rounded border border-gray-200 min-w-[48%] overflow-hidden h-0 pb-[105%] md:pb-[43%] lg:pb-[38%] mb-10 md:mr-3 md:mx-0">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        {children}
      </div>
    </div>
  );
}

YoutubeCard.propTypes = {
  children: PropTypes.array,
};
