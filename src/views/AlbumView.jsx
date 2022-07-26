import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import AlbumsContainer from "~/containers/AlbumsContainer";

export default function AlbumView() {
  return (
    <>
      <Header />
      <AlbumsContainer />
      <Footer />
    </>
  );
}
