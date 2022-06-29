import React from "react";
import maindoorImg from "@/images/maindoor-background.jpg";

export default function MainDoorComponent() {
  return (
    <div className="relative pt-24">
      <div className="max-w-7xl mx-auto px-4" style={{ height: "400px" }}>
        <div className="">최상위</div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center min-h-[200px] md:min-h-[500px]"
        style={{ backgroundImage: `url(${maindoorImg})` }}
      >
        <p className="">두번째</p>
      </div>
    </div>
  );
}
