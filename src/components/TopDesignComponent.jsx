/* eslint-disable react/prop-types */
import { IconButton } from "./IconButton";

function TopDesignComponent({
  title,
  iconsrc,
  imgclass = "w-7 h-7",
  height = "mt-14",
}) {
  return (
    <>
      <div className={`flex flex-col relative ${height}`}>
        <div className="ring-blue-950 ring-1 bg-slate-800 w-max rounded-full m-auto">
          <IconButton src={iconsrc} imgclass={imgclass}></IconButton>
        </div>
        <div className=" h-px about-div-line absolute"></div>
        <div className="button-about w-max m-auto rounded-full py-2 px-7 mt-10">
          {title}
        </div>
      </div>
    </>
  );
}

export default TopDesignComponent;
