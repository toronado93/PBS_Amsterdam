/* eslint-disable react/no-unescaped-entities */

import icnabout from "../assets/img/icons/icon-AboutUs.png";
import TopDesignComponent from "./TopDesignComponent";

function AboutUs() {
  return (
    <section className="mb-52">
      <TopDesignComponent
        title={"About Us"}
        iconsrc={icnabout}
      ></TopDesignComponent>
      <div className="text-sm text-center w-1/2 m-auto mt-12">
        <p>
          At our core, we believe in understanding your unique business
          requirements to tailor solutions that perfectly align with your goals.
          From meticulous planning to rigorous testing, our methodical process
          ensures smooth development, seamless integration, and reliable
          performance.
        </p>
        <p className="mt-4">
          Join us on your journey to digital greatness, and let's
          collaboratively create a digital future that stands the test of time.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
