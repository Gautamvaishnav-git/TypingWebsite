/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About-Us", href: "/" },
  { name: "Services", href: "/" },
  { name: "Contact", href: "/" },
];

export default function HeroSection(props) {
  return (
    <>
      <div className="-z-50">
        <div className={`relative -z-50 bg-${props.mainBG}-900 overflow-hidden`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-${props.mainBG}-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <svg
                className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-${
                  props.mainBG === "gray" ? "gray-700" : "white"
                } transform translate-x-1/2`}
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Popover>
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
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div
                      className={`rounded-lg shadow-md bg-${props.mainBG}-900 ring-1 ring-black ring-opacity-5 overflow-hidden`}
                    >
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-20 w-auto"
                            src="../../Logo.png"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button
                            className={`bg-${props.mainBG}-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                          >
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

              <main className={`mt-10 bg-${props.mainBG} mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}>
                <div className="sm:text-center lg:text-left">
                  <h1
                    className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`}
                  >
                    <span
                      className={`block xl:inline text-${
                        props.mainBG === "gray" ? "white" : "gray-900"
                      }`}
                    >
                      We have Best
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      Developers
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/about"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
        <section
          className={`text-${
            props.mainBG === "gray" ? "white" : "gray-900"
          } bg-${props.mainBG}-900 body-font`}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1
                  className={`sm:text-3xl text-2xl font-medium title-font mb-2 text-${
                    props.mainBG === "gray" ? "white" : "gray-900"
                  }`}
                >
                  Lorem Ipsum
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className={`bg-${props.mainBG}-900 p-6 rounded-lg shadow-lg`}>
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1503187680590-525b6e7a793f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2
                    className={`text-lg text-${
                      props.mainBG === "gray" ? "white" : "gray-900"
                    } font-medium title-font mb-4`}
                  >
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className={`bg-${props.mainBG}-900 p-6 rounded-lg shadow-lg`}>
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2
                    className={`text-lg text-${
                      props.mainBG === "gray" ? "white" : "gray-900"
                    } font-medium title-font mb-4`}
                  >
                    Colosseum Roma
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className={`bg-${props.mainBG}-900 p-6 rounded-lg shadow-lg`}>
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2
                    className={`text-lg text-${
                      props.mainBG === "gray" ? "white" : "gray-900"
                    } font-medium title-font mb-4`}
                  >
                    Great Pyramid of Giza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className={`bg-${props.mainBG}-900 p-6 rounded-lg shadow-lg`}>
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2
                    className={`text-lg text-${
                      props.mainBG === "gray" ? "white" : "gray-900"
                    } font-medium title-font mb-4`}
                  >
                    San Francisco
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

HeroSection.propTypes = {
  mainBG: PropTypes.string.isRequired,
};

HeroSection.defaultProps = {
  mainBG: "gray",
};
