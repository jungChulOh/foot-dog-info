import React from "react";
import kakaoSpeechBubbleImg from "@/images/icons/kakaotalk_btn/kakao-speech-bubble.png";

export default function Content() {
  return (
    <div className="py-10 md:px-10 border-t-2 border-b-2 border-gray-100">
      <div className="flex flex-col justify-center items-center">
        <p className="font-normal text-sm md:text-base text-gray-400 mb-6">
          뛰세요! 두려워 마시고 같이 뜁시다! ⚽
        </p>
        <p className="text-xl md:text-3xl font-bold mb-6">
          우리는 FC풋도그 입니다!
        </p>
        <a
          href="https://open.kakao.com/me/FC_Footdog"
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center transition ease-in-out bg-yellow-300 rounded-3xl text-white mb-6 shadow-lg focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:scale-110 focus:-translate-y-2"
        >
          <div className="p-4 rounded-l-3xl flex flex-row justify-between">
            <img src={kakaoSpeechBubbleImg} className="w-6 h-auto" />
          </div>
          <p className="p-4 pl-0">가입 문의</p>
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
  );
}
