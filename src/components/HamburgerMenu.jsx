/* eslint-disable react/prop-types */
import { Disclosure } from "@headlessui/react";
import TopArch from "../assets/img/mobile/navbar/navbar-arch-top.png";
import BottomArch from "../assets/img/mobile/navbar/navbar-arch-bottom.png";
import { Link as ScrollLink } from "react-scroll";

export function HamburgerMenu({ navigation }) {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="relative flex flex-col items-center h-screen px-2 pb-3 pt-2  text-center ">
        <div className="big-main-line"></div>
        <img
          className="relative w-2/5 mx-auto mt-16 mb-16 "
          src={TopArch}
        ></img>
        <div className="flex flex-col gap-20 max-w-max ">
          {navigation.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-950}
            >
              <Disclosure.Button>{item.name}</Disclosure.Button>
            </ScrollLink>
          ))}
          {/* {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.to}
              className="p-2 text-sm bg-color-big-main-line"
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))} */}
        </div>
        <img className="w-2/5 mx-auto mt-16" src={BottomArch}></img>
      </div>
    </Disclosure.Panel>
  );
}

export default HamburgerMenu;
