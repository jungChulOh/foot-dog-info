import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  VideoCameraIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import circleEmblem from "@/images/icons/circle-emblem.png";
import kakaoSpeechBubbleImg from "@/images/icons/kakaotalk_btn/kakao-speech-bubble.png";

const menus = [
  { name: "YouTube", location: "/youtube", icon: VideoCameraIcon },
  { name: "Album", location: "/album", icon: PhotographIcon },
];

export default function NavBar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          {/* Nav Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className="flex justify-start items-center">
              <img className="h-8 mr-2 sm:h-10" src={circleEmblem} alt="Logo" />
              <span className="text-sm md:text-lg font-bold">FC 풋도그</span>
            </NavLink>
          </div>

          {/* Nav Mobile menu Button */}
          <div className="flex -mr-2 -my-2 md:hidden">
            <a
              href="https://open.kakao.com/o/s1q0dzne"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center p-2 mr-5 text-xs bg-yellow-300 rounded-3xl text-white focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <div className="rounded-l-3xl flex flex-row justify-between mx-1">
                <img src={kakaoSpeechBubbleImg} className="w-5 h-auto" />
              </div>
              <p className="mx-1">가입 문의</p>
            </a>
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Pc Menu */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="https://open.kakao.com/o/s1q0dzne"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center p-2 text-xs bg-yellow-300 rounded-3xl text-white focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <div className="rounded-l-3xl flex flex-row justify-between mx-1">
                <img src={kakaoSpeechBubbleImg} className="w-5 h-auto" />
              </div>
              <p className="mx-1">가입 문의</p>
            </a>
            {menus.map((menu) => (
              <NavLink
                to={menu.location}
                key={menu.name}
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <div className="flex justify-center items-center">
                  <menu.icon
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="ml-4 text-gray-500">{menu.name}</span>
                </div>
              </NavLink>
            ))}
          </Popover.Group>

          {/* Nav Mobile Menu Popup */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                {/*  */}
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-row justify-center items-center">
                      <img
                        className="h-8 w-auto mr-3"
                        src={circleEmblem}
                        alt="Logo"
                      />
                      <span className="text-sm md:text-lg font-bold">
                        FC 풋도그
                      </span>
                    </div>

                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menus.map((menu) => (
                        <NavLink
                          key={menu.name}
                          to={menu.location}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <menu.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          ></menu.icon>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {menu.name}
                          </span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* 하단 메뉴 */}
                {/* <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    
                  </div>
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </div>
    </Popover>
  );
}
