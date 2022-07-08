import React, { useEffect } from "react";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";
import MainComponent from "~/components/MainComponent";

export default function MainView() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}
