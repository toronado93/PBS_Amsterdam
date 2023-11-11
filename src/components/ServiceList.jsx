import { IconButton } from "./IconButton";
import DownArrow from "../assets/img/icons/services/Down-Arrow.png";
import ServiceItem from "./ServiceItem";

/* eslint-disable react/prop-types */
function ServiceList({ serviceData, activetab, activeHandler }) {
  const { id, serviceName, subTitle, iconsrc, nestedService } = serviceData;

  return (
    <li
      className={`flex flex-col gap-2 items-center mb-3   ${
        activetab === id ? "wrapped" : "unwrapped"
      }`}
    >
      <div className="container flex justify-between gap-10 w-full top-border ">
        <div className="flex gap-1 ">
          <IconButton imgclass={"h-12 w-12"} src={iconsrc}></IconButton>
          <p className="self-center">{serviceName}</p>
        </div>
        <button
          onClick={() => {
            activeHandler(id);
          }}
          className="button-activetrigger"
        >
          <IconButton src={DownArrow}></IconButton>
        </button>
      </div>

      <div
        className={`${activetab === id ? "wrapped-child" : "unwrapped-child"}`}
      >
        <div className="w-max mx-auto">
          {subTitle ? (
            <div className="conditional-div text-sm p-4 max-w-xs sm:mx-auto text-center rounded-full">
              {subTitle}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-2 mt-12">
          {nestedService.map((ns, _) => {
            return (
              <ServiceItem
                key={_}
                nestedService={nestedService[_]}
              ></ServiceItem>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default ServiceList;
