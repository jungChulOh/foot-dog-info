import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AlbumsComponent from "~/components/AlbumsComponent";
import FooterComponent from "~/components/FooterComponent";
import HeaderComponent from "~/components/HeaderComponent";
import LoaderComponent from "~/components/LoaderComponent";

export default function AlbumView() {
  const { loading } = useSelector((state) => state.albums);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loading && <LoaderComponent />}
      <HeaderComponent />
      <AlbumsComponent />
      <FooterComponent />
    </>
  );
}
