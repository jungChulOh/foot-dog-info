import React from "react";
import { useSelector } from "react-redux";
import YoutubeItemComponent from "./YoutubeItemComponent";

export default function YoutubesComponent() {
  const { items } = useSelector((state) => state.youtubes);

  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-10">
        {items.map((item) => {
          const { id } = item;
          const { videoId } = id;
          return <YoutubeItemComponent key={videoId} videoId={videoId} />;
        })}
      </div>
    </div>
  );
}
