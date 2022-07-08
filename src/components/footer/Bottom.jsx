import React from "react";
import // YoutubeOutlined,
// InstagramOutlined,
// BoldOutlined,
"@ant-design/icons";
import normalEmblem from "@/images/icons/normal-emblem.png";
import youtubeIcon from "@/images/icons/youtube-icon.png";
import instagramIcon from "@/images/icons/instagram-icon.png";
import bandIcon from "@/images/icons/band-icon.png";

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
            className="flex justify-center items-center mr-5 w-10 h-auto"
          >
            <img src={youtubeIcon} className="rounded bg-transparent" />
          </a>
          <a
            href="https://www.instagram.com/fcfootdog_official/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center mr-5 w-10 h-auto"
          >
            <img src={instagramIcon} className="rounded bg-transparent" />
          </a>
          <a
            href="https://band.us/@fcfootdog"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-10 h-auto"
          >
            <img src={bandIcon} className="rounded bg-transparent" />
          </a>
        </div>
      </div>
    </div>
  );
}
