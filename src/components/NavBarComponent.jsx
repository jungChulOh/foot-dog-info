import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  VideoCameraIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import Logo from "@/images/icons/icon-512.png";

const menus = [
  { name: "YouTube", location: "#", icon: VideoCameraIcon },
  { name: "Album", location: "#", icon: PhotographIcon },
];

export default function NavBarComponent() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/* Nav Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">FC 풋도그</span>
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
            </a>
          </div>

          {/* Nav Mobile menu Button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Pc Menu */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {menus.map((menu) => (
              <a
                href={menu.location}
                key={menu.name}
                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <div className="flex justify-center items-center">
                  <menu.icon
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="ml-4 text-gray-500">{menu.name}</span>
                </div>
              </a>
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
                    <div>
                      <img className="h-8 w-auto" src={Logo} alt="Logo" />
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
                        <a
                          key={menu.name}
                          href={menu.location}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <menu.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          ></menu.icon>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {menu.name}
                          </span>
                        </a>
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
