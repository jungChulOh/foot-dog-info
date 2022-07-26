import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutubes } from "~/store/youtubeSlice";
import Youtubes from "~/components/youtube/Youtubes";

export default function YoutubesContainer() {
  const { loading, items } = useSelector((state) => state.youtubes);
  const dispatch = useDispatch();

  useEffect(() => {
    // 중복 youtube 리스트 가져오기 방지
    // youtube API 하루 할당량이 소량임.
    if (!items.length) {
      dispatch(fetchYoutubes());
    }
  }, []);

  return <Youtubes loading={loading} items={items} />;
}
