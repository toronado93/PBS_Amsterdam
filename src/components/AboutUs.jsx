/* eslint-disable react/no-unescaped-entities */

import icnabout from "../assets/img/icons/icon-AboutUs.png";
import TopDesignComponent from "./TopDesignComponent";

import { Element } from "react-scroll";

// Shadow Arrows

import LeftShadowArrow from "../assets/img/desktop/about/left-shadow-arrow.png";
import RightShadowArrow from "../assets/img/desktop/about/right-shadow-arrow.png";
import Rectangle from "../assets/img/desktop/about/rectangle.png";
import Triangle from "../assets/img/desktop/about/triangle.png";
import RectangleMobile from "../assets/img/mobile/about/mobile-rectangle.png";
import TriangleMobile from "../assets/img/mobile/about/mobile-triangle.png";

function AboutUs() {
  return (
    <Element name="#about">
      <section className="container mt-20 mx-auto mb-72 sm:mb-8">
        <div className="flex justify-center">
          <img
            className="self-end sm:self-center mb-6 sm:mb-0 h-64 sm:h-96 "
            src={LeftShadowArrow}
          ></img>

          <div className="md:w-1/2 sm:w-11/12">
            <TopDesignComponent
              title={"About Us"}
              iconsrc={icnabout}
              height="mt-0"
            ></TopDesignComponent>

            <div className="text-sm text-center font-extralight m-auto mt-12">
              <p>
                At our core, we believe in understanding your unique business
                requirements to tailor solutions that perfectly align with your
                goals. From meticulous planning to rigorous testing, our
                methodical process ensures smooth development, seamless
                integration, and reliable performance.
              </p>
              <p className="mt-4 mx-auto  ">
                Join us on your journey to digital greatness, and let's
                collaboratively create a digital future that stands the test of
                time.
              </p>
            </div>
          </div>
          <img
            className="self-end sm:self-center mb-6 sm:mb-0 h-64 sm:h-96"
            src={RightShadowArrow}
          ></img>
        </div>
        <div className="hidden sm:block relative w-full mt-10 bottom_img">
          <img className="" src={Rectangle}></img>
          <img className="triangle" src={Triangle}></img>
        </div>
        <div className="block sm:hidden relative w-full  bottom_img">
          <img className="absolute left-2" src={RectangleMobile}></img>
          <img className="absolute top-44 left-11 " src={TriangleMobile}></img>
        </div>
      </section>
    </Element>
  );
}

export default AboutUs;
