/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";

// import mainbg from "../assets/img/desktop/banners/mainbg.png";
// import secondarybg from "../assets/img/desktop/banners/secondarybg.png";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Direct Import from bundle
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "swiper/css/scrollbar";

// Located data here

// Imgs

import mainpic1 from "../assets/img/desktop/banners/mainbg.png";
import mainpic2 from "../assets/img/desktop/banners/secondarybg.png";

const swiperData = [
  {
    id: 1,
    title1: "Intently Innovates, ",
    title2: "Humbly Leads",
    subtitle:
      "We develop sustainable digital systems, crafting solutions with technology and expertise.",
    imgsource: mainpic1,
    styles: ["text-purple-500", "text-center"],
    isPositionCenter: true,
  },
  {
    id: 2,
    title1: "Intently Innovates, ",
    title2: "Humbly Leads",
    subtitle:
      "We develop sustainable digital systems, crafting solutions with technology and expertise.",
    imgsource: mainpic2,
    styles: ["text-purple-500", "text-center"],
    isPositionCenter: false,
  },
];

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      //   navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      onSlideChange={() => {
        console.log("Slide is changed");
      }}
      onSwiper={(swiper) => {
        console.log(swiper);
      }}
    >
      {swiperData.map((slides) => (
        <SwiperSlide key={slides.id}>
          <div
            className={`flex ${
              slides.isPositionCenter ? "justify-center" : ""
            }`}
            style={{
              backgroundImage: `url(${slides.imgsource})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          >
            <div
              className={`banner-title mt-24 pb-56 ${
                slides.isPositionCenter ? "text-center" : "ml-8 text-left"
              } mt-24 pb-56`}
            >
              <h1 className="text-3xl md:text-7xl font-bold">
                {slides.title1}
              </h1>
              <h1 className="text-3xl md:text-7xl font-bold red-banner-text ">
                {slides.title2}
              </h1>
              <p
                className={`mt-10 w-3/4 ${
                  slides.isPositionCenter ? "m-auto" : ""
                } `}
              >
                {slides.subtitle}
              </p>
              <button className="swiper-button text-base border border-red-800 rounded-lg  mt-6 px-4 py-1 ">
                Let's Meet
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
