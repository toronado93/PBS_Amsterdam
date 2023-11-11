import TopDesignComponent from "./TopDesignComponent";
import iconServices from "../assets/img/icons/icon-services.png";
import { useState } from "react";
import ServiceList from "./ServiceList";

import { Element } from "react-scroll";

// Data Source
import services from "../data/service_Data";

function ServicesComponent() {
  const [activetab, setActiveTavb] = useState(-1);

  const activeHandler = (key) => {
    setActiveTavb((previous_key) => {
      if (previous_key === key) {
        return -1;
      } else {
        return key;
      }
    });
  };

  return (
    <Element name="#services">
      <section className="container m-auto">
        <TopDesignComponent
          title={"Services"}
          iconsrc={iconServices}
        ></TopDesignComponent>

        <div className="mt-20 w-full m-auto">
          <ul className="block w-full border-for-last-child">
            {services.map((service) => {
              return (
                <ServiceList
                  key={service.id}
                  serviceData={service}
                  activetab={activetab}
                  activeHandler={activeHandler}
                ></ServiceList>
              );
            })}
          </ul>
        </div>
      </section>
    </Element>
  );
}

export default ServicesComponent;
