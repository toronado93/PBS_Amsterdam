import iconFrame from "../assets//img/desktop/references/Frame-33.png";
import TopDesignComponent from "./TopDesignComponent";
import leftVector from "../assets/img/desktop/references/vector-left.png";
import rightVector from "../assets/img/desktop/references/vector-right.png";

import { Element } from "react-scroll";
import ReferenceItems from "./ReferenceItems";

// Carousel

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// img source
import SenPilic from "../assets/img/references/430_senpilic.jpg";
import AkilliTv from "../assets/img/references/Akilli_tv.png";
import HayatLogo from "../assets/img/references/hayat-logo.png";
import Ikea from "../assets/img/references/IKEA-Logo.png";
import Popy from "../assets/img/references/popy_para.png";
import MisliCom from "../assets/img/references/mislicom-logo.png";
import OnurAir from "../assets/img/references/Onurair.png";
import PayPay from "../assets/img/references/paypay.png";
import Renault from "../assets/img/references/Renault-Logo-2.png";

function ReferencesComponent() {
  const reference_list = [
    { id: 0, name: "Senpilic", src: SenPilic },
    { id: 1, name: "Akilli_tv", src: AkilliTv },
    { id: 2, name: "Hayat", src: HayatLogo },
    { id: 3, name: "Ikea", src: Ikea },
    { id: 4, name: "Popy", src: Popy },
    { id: 5, name: "MisliCom", src: MisliCom },
    { id: 5, name: "MisliCom", src: OnurAir },
    { id: 5, name: "MisliCom", src: PayPay },
    { id: 5, name: "MisliCom", src: Renault },
  ];

  // carousel config
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Element name="#references">
      <section>
        <TopDesignComponent
          title={"References"}
          iconsrc={iconFrame}
        ></TopDesignComponent>
        <div className="container flex m-auto mt-32">
          <img className="self-center" src={leftVector}></img>
          <Carousel
            responsive={responsive}
            swipeable={false}
            infinite={true}
            autoPlay={true}
            // Can be manipulated by tailwind
            containerClass=" w-4/5  m-auto"
            itemClass=" pl-16 sm:pl-24"
          >
            {reference_list.map((reference) => (
              <ReferenceItems
                key={reference.id}
                src={reference.src}
              ></ReferenceItems>
            ))}
          </Carousel>
          <img className="self-center" src={rightVector}></img>
        </div>
      </section>
    </Element>
  );
}

export default ReferencesComponent;
