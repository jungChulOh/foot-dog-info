import React, { useEffect } from "react";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";
import YoutubeDoorComponent from "~/components/YoutubeDoorComponent";

export default function YoutubeView() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeaderComponent />
      <YoutubeDoorComponent />
      <FooterComponent />
    </>
  );
}
