import React, { useEffect } from "react";
import CalendarComponent from "~/components/CalendarComponent";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";
import MainDoorComponent from "~/components/MainDoorComponent";

export default function MainView() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainDoorComponent />
      <CalendarComponent />
      <FooterComponent />
    </>
  );
}
