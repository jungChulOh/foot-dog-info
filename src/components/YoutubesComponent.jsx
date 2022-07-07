import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutubes } from "~/store/youtubeSlice";
import YoutubeItemComponent from "./YoutubeItemComponent";
import LoaderComponent from "./LoaderComponent";

export default function YoutubesComponent() {
  const { loading, items } = useSelector((state) => state.youtubes);
  const dispatch = useDispatch();

  useEffect(() => {
    // 중복 youtube 리스트 가져오기 방지
    // youtube API 하루 할당량이 소량임.
    if (!items.length) {
      dispatch(fetchYoutubes());
    }
  }, []);

  return (
    <>
      {loading && <LoaderComponent />}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-3">
          {items.map((item) => {
            const { id } = item;
            const { videoId } = id;
            const { title, publishedAt } = item.snippet;
            return (
              <YoutubeItemComponent
                key={videoId}
                videoId={videoId}
                title={title}
                publishedAt={publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
