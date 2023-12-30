/* eslint-disable react/prop-types */
import iconEllipse from "../assets/img/desktop/services/Ellipse-55.png";

function ServiceItem({ nestedService }) {
  const { nestedServiceTitle, nestedServiceParag } = nestedService;

  return (
    <div className="nestedService cursor-pointer border mx-auto border-gray-700 rounded-xl pt-5 px-5 pb-12 ">
      <div className="inline-block ring-1 ring-red-950 p-1 rounded-full">
        <img src={iconEllipse}></img>
      </div>
      <div className="custom-max-w-xs">
        <h2 className="text-base mb-2 ">{nestedServiceTitle}</h2>
        <p className=" text-sm opacity-70">{nestedServiceParag}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
