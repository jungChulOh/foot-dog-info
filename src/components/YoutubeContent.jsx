import React from "react";
import YoutubeDoor from "./youtube/YoutubeDoor";
import YoutubesContainer from "~/containers/YoutubesContainer";

export default function YoutubeContent() {
  return (
    <div className="relative pt-28">
      <YoutubeDoor />
      <YoutubesContainer />
    </div>
  );
}
