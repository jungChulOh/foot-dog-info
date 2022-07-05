import React from "react";
import { useSelector } from "react-redux";
import YoutubeItemComponent from "./YoutubeItemComponent";

export default function YoutubesComponent() {
  const { items } = useSelector((state) => state.youtubes);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-3">
        {items.map((item) => {
          const { id } = item;
          const { videoId } = id;
          const { title, publishedAt } = item.snippet;
          return (
            <YoutubeItemComponent
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
