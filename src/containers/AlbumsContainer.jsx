import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumsContent from "~/components/AlbumsContent";
import { fetchAlbums } from "~/store/albumSlice";

export default function AlbumsContainer() {
  const { loading, items, statusCode, message } = useSelector(
    (state) => state.albums
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  if (statusCode !== 200) {
    console.log(statusCode, message);
    return (
      <div className="relative pt-24">
        <div className="p-5 flex flex-row flex-wrap justify-center items-center md:items-start">
          <h1>앨범조회시 에러가 발생되었습니다.</h1>
          <h1>잠시후 다시 시도하시기 바랍니다.</h1>
        </div>
      </div>
    );
  }

  return <AlbumsContent loading={loading} items={items} />;
}
