import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "~/store/albumSlice";

export default function AlbumsComponent() {
  const { items } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="relative pt-24">
      <div className="p-5 flex flex-row flex-wrap justify-center items-center md:items-start">
        {items.map((item) => (
          <img
            className="mb-5 rounded max-w-[80%] md:max-w-[45%] md:mr-3 shadow-sm shadow-black"
            key={item.photo_key}
            src={item.url}
          ></img>
        ))}
      </div>
    </div>
  );
}
