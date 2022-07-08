import React from "react";
import YoutubeDoor from "./youtube/YoutubeDoor";
import Youtubes from "./youtube/Youtubes";

export default function YoutubeComponent() {
  return (
    <div className="relative pt-28">
      <YoutubeDoor />
      <Youtubes />
    </div>
  );
}
