import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutubes } from "~/store/youtubeSlice";
import stadiumImg from "@/images/stadium.jpg";
import { useEffect } from "react";
import LoaderComponent from "./LoaderComponent";

export default function YoutubeDoorComponent() {
  const { items, loading } = useSelector((state) => state.youtubes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutubes({ test: 1, test2: 3 }));
  }, []);

  console.log(items);
  return (
    <>
      {loading && <LoaderComponent />}
      <div className="relative pt-28">
        <div
          className="relative mb-10 bg-no-repeat bg-cover bg-center min-h-[200px] md:min-h-[500px]"
          style={{ backgroundImage: `url(${stadiumImg})` }}
        >
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/bmobVwuUBPk"
          ></iframe>
        </div>
        <div className="max-w-7xl mx-auto px-4 mb-10"></div>
      </div>
    </>
  );
}
