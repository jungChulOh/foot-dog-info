import React from "react";
import maindoorImg from "@/images/maindoor-background.jpg";

export default function MainDoorComponent() {
  return (
    <div className="relative pt-20" style={{ height: "1000px" }}>
      <div
        className="max-w-7xl mx-auto px-4 mb-14 bg-no-repeat bg-cover bg-center bg-fixed min-h-[200px] md:min-h-[400px]"
        style={{ backgroundImage: `url(${maindoorImg})` }}
      >
        <p className="text-white">test</p>
      </div>
    </div>
  );
}
