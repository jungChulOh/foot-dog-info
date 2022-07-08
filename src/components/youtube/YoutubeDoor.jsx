import React from "react";
import { YoutubeOutlined } from "@ant-design/icons";
import stadiumImg from "@/images/stadium.jpg";
import normalEmblemImg from "@/images/icons/normal-emblem.png";

export default function YoutubeDoor() {
  return (
    <div
      className="relative mb-10 bg-no-repeat bg-cover bg-center min-h-[300px] md:min-h-[500px]"
      style={{ backgroundImage: `url(${stadiumImg})` }}
    >
      <div className="absolute top-8 left-0 right-0 mx-auto w-32 md:w-52 md:top-10 h-auto">
        <img src={normalEmblemImg} className="bg-white p-5 rounded-full"></img>
      </div>
      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 mx-auto w-48 h-auto">
        <a
          href="https://www.youtube.com/channel/UCwJHpMFBuEcoTxIDXMOMrhg"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center font-bold text-lg bg-red-600 text-white p-4 border-1 border-gray-400 rounded-full"
        >
          <YoutubeOutlined
            className="mr-3"
            style={{ fontSize: "1.125rem", fontWeight: 900 }}
          />
          <p>풋도그 채널보기</p>
        </a>
      </div>
    </div>
  );
}
