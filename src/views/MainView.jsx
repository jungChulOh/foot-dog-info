import React from "react";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";
import MainDoorComponent from "~/components/MainDoorComponent";

export default function MainView() {
  return (
    <>
      <HeaderComponent />
      <MainDoorComponent />
      <FooterComponent />
    </>
  );
}
