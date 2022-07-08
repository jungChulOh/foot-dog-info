import React from "react";
import {
  YoutubeOutlined,
  InstagramOutlined,
  BoldOutlined,
} from "@ant-design/icons";
import normalEmblem from "@/images/icons/normal-emblem.png";

export default function Bottom() {
  return (
    <div className="flex justify-center items-center py-5 px-4">
      <div className="basis-1/2 hidden md:block">
        <img src={normalEmblem} className="h-20 w-20" alt="Logo2" />
      </div>
      <div className="basis-0 md:basis-1/2">
        <div className="flex justify-center md:justify-end items-center">
          <a
            href="https://www.youtube.com/channel/UCwJHpMFBuEcoTxIDXMOMrhg"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center mr-5 p-1 border-2 border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:animate-bounce"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.instagram.com/fcfootdog_official/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center mr-5 p-2 border-2 border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:animate-bounce"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://band.us/@fcfootdog"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center p-2 border-2 border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:animate-bounce"
          >
            <BoldOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}
