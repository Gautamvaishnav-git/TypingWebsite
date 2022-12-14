/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About-Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar(props) {
  return (
    <div className="sticky top-0">
      <div
        className={`relative bg-${props.mainBG==="gray"?"gray-900":"white"} lg:overflow-hidden drop-shadow md:overflow-hidden sm:overflow-hidden`}
        style={{ zIndex: 1000 }}
      >

        <div className="max-w-7xl flex items-center justify-between mx-8">
          <div
            className={`relative z-10 bg-${props.mainBG}-900 lg:max-w-2xl lg:w-full`}
          >
            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link to="/">
                        <img
                          alt="Workflow"
                          className="h-8 lg:h-32 md:h-32 w-auto sm:h-32"
                          src="../../Logo.png"
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`font-medium text-${
                          props.mainBG === "gray" ? "gray-400" : "gray-500"
                        } hover:text-${
                          props.mainBG === "gray" ? "indigo-400" : "gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/login"
                      className={`font-medium text-${
                        props.mainBG === "gray" ? "indigo-500" : "indigo-600"
                      } hover:text-${
                        props.mainBG === "gray" ? "indigo-400" : "indigo-600"
                      }`}
                    >
                      Log in
                    </Link>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden w-32"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="lg:px-5 lg:pt-4 md:px-5 md:pt-4 flex items-center justify-between lg:w-auto md:w-auto sm:w-auto">
                      <div>
                        <img
                          className="h-20 w-auto"
                          src="../../Logo.png"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>

          <div className="flex items-center justify-center w-1/5 self-center">
          <label htmlFor="toogleA" className="flex items-center cursor-pointer">
            <div className="relative">
              <input id="toogleA" type="checkbox" className="sr-only" onClick={props.toggleMode}/>
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full overflow-hidden shadow -left-1 -top-1 transition">
                <img src="../../logo.png" alt="" />
              </div>
            </div>
          </label>
        </div>

        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  mainBG: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  mainBG: "white",
};
