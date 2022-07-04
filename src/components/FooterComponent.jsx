import React from "react";
import {
  YoutubeOutlined,
  InstagramOutlined,
  BoldOutlined,
} from "@ant-design/icons";
import normalEmblem from "@/images/icons/normal-emblem.png";

export default function FooterComponent() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="py-10 md:px-10 border-t-2 border-b-2 border-gray-100">
          <div className="flex flex-col justify-center items-center">
            <p className="font-normal text-sm md:text-base text-gray-400 mb-6">
              뛰세요! 두려워 마시고 같이 뜁시다! ⚽
            </p>
            <p className="text-xl md:text-3xl font-bold mb-6">
              우리는 FC풋도그 입니다!
            </p>
            <a
              href="https://open.kakao.com/o/s1q0dzne"
              target="_blank"
              rel="noreferrer"
              className="transition ease-in-out p-5 md:p-5 bg-yellow-400 rounded-3xl text-white mb-6 shadow-lg focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:scale-110 focus:-translate-y-2"
            >
              가입 문의
            </a>
            <p className="font-light text-gray-400 mb-10">
              가입은 항상 열려 있습니다 👋
            </p>
            <p className="text-[0.5rem] md:text-xs font-light text-gray-400">
              &copy; {new Date().getFullYear()} FC FootDog Team ⚽ Created By
              JungChulOh
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center py-5 px-4">
          <div className="basis-1/2 hidden md:block">
            <img src={normalEmblem} className="h-20 w-20" alt="Logo2" />
          </div>
          <div className="basis-0 md:basis-1/2">
            <div className="flex justify-end md:justify-center items-center">
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
      </div>
    </div>
  );
}
