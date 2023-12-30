import Logo from "../../components/Logo";
import linkedin from "../../assets/img/icons/icon-linkedin.svg";
import insta from "../../assets/img/icons/icon-insta.svg";
import { IconButton } from "../../components/IconButton";
import { useContext } from "react";
import { NavbarContext } from "../../context/ContextNavbar";

import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const { isOpen } = useContext(NavbarContext);

  return (
    <>
      {" "}
      {isOpen ? (
        <footer className=" container m-auto ">
          <div className="footer flex flex-col sm:flex-row justify-between items-center text-center py-10">
            <Logo width="w-36"></Logo>
            <ul className=" sm:self-center flex flex-col sm:flex sm:flex-row sm:gap-24 list-none text-sm mt-6 sm:mt-0 mb-4 sm:mb-0 ">
              <li>
                <ScrollLink
                  className="cursor-pointer transition ease-in-out delay-150 hover:text-white"
                  to="#about"
                  smooth={true}
                  duration={500}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="cursor-pointer transition ease-in-out delay-150 hover:text-white"
                  to="#services"
                  smooth={true}
                  duration={500}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="cursor-pointer transition ease-in-out delay-150 hover:text-white"
                  to="#services"
                  smooth={true}
                  duration={500}
                >
                  References
                </ScrollLink>
              </li>
            </ul>
            <div className="hidden sm:block">
              <IconButton
                info={"Linkedin"}
                src={linkedin}
                imgclass={"h-5 w-5 opacity-20"}
              ></IconButton>
              <IconButton
                info={"Insta"}
                src={insta}
                imgclass={"h-5 w-5 opacity-20"}
              ></IconButton>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <p className="copyright text-sm font text-center mt-6 pb-8">
                Copyright © 2023 All rights reserved.
              </p>
            </div>
            <div className="sm:hidden self-center">
              <IconButton
                info={"Linkedin"}
                src={linkedin}
                imgclass={"h-5 w-5 opacity-20"}
              ></IconButton>
              <IconButton
                info={"Insta"}
                src={insta}
                imgclass={"h-5 w-5 opacity-20"}
              ></IconButton>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
