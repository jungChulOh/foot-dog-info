import React from "react";
import Bottom from "./footer/Bottom";
import Content from "./footer/Content";

export default function FooterComponent() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <Content />
        <Bottom />
      </div>
    </div>
  );
}
