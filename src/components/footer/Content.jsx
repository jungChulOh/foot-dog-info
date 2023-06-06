import React from "react";

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
        <div className="flex flex-row justify-between items-center">
          <a
            href="https://forms.gle/mu65P214oCS8yLvF8"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center transition ease-in-out bg-sky-700 rounded-3xl text-white mb-6 shadow-lg focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:scale-110 focus:-translate-y-2 mr-5"
          >
            <p className="p-4 font-bold"> 가입신청서 작성</p>
          </a>
          <a
            href="https://open.kakao.com/me/FC_Footdog"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center transition ease-in-out bg-yellow-400 rounded-3xl text-amber-950 mb-6 shadow-lg focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:scale-110 focus:-translate-y-2"
          >
            <p className="p-4 font-bold">가입문의</p>
          </a>
        </div>
        <p className="font-light text-gray-400 mb-10">
          가입은 항상 열려 있습니다 👋
        </p>
        <p className="text-[0.5rem] md:text-xs font-light text-gray-400">
          &copy; {new Date().getFullYear()} FC FootDog Team ⚽ Created By{" "}
          <a
            className="font-bold text-sky-700"
            target="_blank"
            href="https://github.com/jungChulOh"
            rel="noopener noreferrer"
          >
            Iron.J
          </a>
        </p>
      </div>
    </div>
  );
}
