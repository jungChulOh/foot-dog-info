import React from "react";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";

export default function MainView() {
  return (
    <>
      <HeaderComponent />
      <div className="mt-24" style={{ height: "100px" }}>
        본문
      </div>
      <FooterComponent />
    </>
  );
}
