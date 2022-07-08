import React from "react";
import circleEmblem from "@/images/icons/circle-emblem.png";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="hidden bg-white md:block">
        <div className="m-auto absolute top-0 left-0 bottom-0 right-0 flex flex-row my-20 mx-16  rounded-md min-h-[297px]">
          {/* 왼쪽 */}
          <div className="basis-1/2 py-5 border-y-2 border-l-2 border-gray-100 overflow-y-auto rounded-l-md">
            <div className="pl-6">
              <img src={circleEmblem} className="h-20 w-auto mb-20" />
              <p className="font-bold text-indigo-600 mb-2">404 ERROR</p>
              <p className="font-bold xl:text-3xl md:text-xl mb-1">
                존재하지 않은 페이지 입니다. 😥
              </p>
              <p className="font-light text-sm text-gray-400 mb-16">
                해당 링크는 존재하지 않습니다.
              </p>
              <NavLink to="/" className="font-bold text-indigo-600">
                홈으로 되돌아가기 &#8594;
              </NavLink>
            </div>
          </div>
          {/* 오른쪽 */}
          <div
            className="basis-1/2 bg-no-repeat bg-cover bg-center rounded-r-md"
            style={{ backgroundImage: `url(/images/ball-background.jpg)` }}
          ></div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="m-auto absolute top-0 left-0 bottom-0 right-0 flex flex-col mx-5 rounded-md justify-center">
          <div className="py-5 border-2 border-gray-100 rounded-md">
            <div className="pl-6">
              <img src={circleEmblem} className="h-20 w-auto mb-20" />
              <p className="font-bold text-indigo-600 mb-2">404 ERROR</p>
              <p className="font-bold xl:text-3xl md:text-xl mb-1">
                존재하지 않은 페이지 입니다. 😥
              </p>
              <p className="font-light text-sm text-gray-400 mb-16">
                해당 링크는 존재하지 않습니다.
              </p>
              <NavLink to="/" className="font-bold text-indigo-600">
                홈으로 되돌아가기 &#8594;
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
