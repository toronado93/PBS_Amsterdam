/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "./IconButton";
import NavigationItems from "./NavigationItems";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/img/logo/amsterdam1.png";
import linkedin from "../assets/img/icons/icon-linkedin.svg";
import insta from "../assets/img/icons/icon-insta.svg";

import { Link } from "react-router-dom";

export const navigation = [
  { id: 1, name: "ABOUT US", to: "/about", current: false },
  { id: 2, name: "SERVICES", to: "/services", current: false },
  { id: 3, name: "REFERENCES", to: "/references", current: false },
  { id: 4, name: "CONTACT", to: "/contact", current: false },
];

function Navbar() {
  // const [activeLink, setActiveLink] = useState("home");
  // const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toogleIsActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <Disclosure as="nav" className="navbar-background py-3 pb-5">
      {({ open }) => (
        <>
          <div
            className={`mx-auto max-w-12xl px-2 sm:px-6 lg:px-8 mt-2 w-full z-50 `}
          >
            <div className="relative flex h-10 items-center justify-between">
              {/* Hamburger menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 sm:flex-none items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center iconic-sultan-container">
                  <Link to={"/"}>
                    <img
                      className="w-28 h-auto"
                      src={logo}
                      alt="pbsAmsterdam"
                    />
                  </Link>
                </div>
              </div>

              {/* Center Nav */}
              <div className="hidden sm:block border rounded-full px-4 py-3 text-xs">
                <div className="flex space-x-4 ">
                  {navigation.map((item) => (
                    <NavigationItems
                      toogleIsActive={toogleIsActive}
                      isActive={isActive}
                      key={item.id}
                      item={item}
                    ></NavigationItems>
                  ))}
                </div>
              </div>

              {/* Icons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" hidden sm:block ">
                  <div className="flex gap-1 social-icon">
                    <IconButton
                      info={"Linkedin"}
                      src={linkedin}
                      imgclass={"h-5 w-5 opacity-50"}
                    ></IconButton>
                    <IconButton
                      info={"Insta"}
                      src={insta}
                      imgclass={"h-5 w-5 opacity-50"}
                    ></IconButton>
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 lets-connect">
                  {/* <button
                    type="button"
                    className="text-white border border-white py-3 px-3 rounded-xl"
                  >
                    Let's Connect
                  </button> */}

                  <Transition
                    // as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <HamburgerMenu navigation={navigation}></HamburgerMenu>
        </>
      )}
    </Disclosure>
  );
}
export default Navbar;
