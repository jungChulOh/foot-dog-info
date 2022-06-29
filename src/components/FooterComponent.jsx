import React from "react";
import {
  YoutubeOutlined,
  InstagramOutlined,
  LineOutlined,
} from "@ant-design/icons";
import Logo2 from "@/images/icons/icon2-512.png";

export default function FooterComponent() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-14">
        <div className="py-10 px-10 border-t-2 border-b-2 border-gray-100">
          <div className="flex flex-col justify-center items-center">
            <p className="font-normal text-gray-400 mb-6">
              뛰세요! 두려워 마시고 같이 뜁시다! ⚽
            </p>
            <p className="text-3xl font-bold mb-6">우리는 FC풋도그 입니다!</p>
            <a
              href="#"
              className="transition ease-in-out p-5 bg-yellow-400 rounded-lg text-white mb-6 shadow-lg focus:scale-110 focus:-translate-y-2"
            >
              모임장에게 문의하러 가기
            </a>
            <p className="font-light text-gray-400 mb-10">
              추가 문구 넣을 준비해야됨
            </p>
            <p className="text-xs font-light text-gray-400">
              &copy; {new Date().getFullYear()} FC FootDog Team ⚽
            </p>
          </div>
        </div>

        <div className="flex ustify-center items-center py-5 px-4">
          <div className="basis-1/4">
            <img src={Logo2} className="h-14 w-20" alt="Logo2" />
          </div>
          <div className="basis-1/2"></div>
          <div className="basis-1/4">
            <div className="flex justify-center items-center">
              <a
                href="https://www.youtube.com/channel/UCwJHpMFBuEcoTxIDXMOMrhg"
                className="flex justify-center items-center mr-5 p-1 border border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <YoutubeOutlined />
              </a>
              <a
                href="https://www.instagram.com/fcfootdog_official/"
                className="flex justify-center items-center mr-5 p-2 border border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://band.us/@fcfootdog"
                className="flex justify-center items-center p-2 border border-gray-400 rounded-full w-10 h-10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <LineOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
