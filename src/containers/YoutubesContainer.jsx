import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYoutubes } from "~/store/youtubeSlice";
import Youtubes from "~/components/youtube/Youtubes";

export default function YoutubesContainer() {
  const { loading, items, statusCode, message } = useSelector(
    (state) => state.youtubes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // 중복 youtube 리스트 가져오기 방지
    // youtube API 하루 할당량이 소량임.
    if (!items.length) {
      dispatch(fetchYoutubes());
    }
  }, []);

  if (statusCode !== 200) {
    console.log(statusCode, message);
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center mb-3">
          <h1>유투브 정보 조회시 에러가 발생되었습니다.</h1>
          <h1>잠시후 다시 시도하시기 바랍니다.</h1>
        </div>
      </div>
    );
  }

  return <Youtubes loading={loading} items={items} />;
}
