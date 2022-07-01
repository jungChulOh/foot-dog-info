import React from "react";
import stadiumImg from "@/images/stadium.jpg";

export default function YoutubeDoorComponent() {
  return (
    <div className="relative pt-28">
      <div
        className="relative mb-10 bg-no-repeat bg-cover bg-center min-h-[200px] md:min-h-[500px]"
        style={{ backgroundImage: `url(${stadiumImg})` }}
      >
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/bmobVwuUBPk"
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-10"></div>
    </div>
  );
}
