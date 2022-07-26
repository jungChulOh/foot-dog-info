import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumsContent from "~/components/AlbumsContent";
import { fetchAlbums } from "~/store/albumSlice";

export default function AlbumsContainer() {
  const { loading, items } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return <AlbumsContent loading={loading} items={items} />;
}
