import formTopFrame from "../assets/img/desktop/contact/form-top-frame.png";
import formTopFrameMobile from "../assets/img/mobile/contact/form-top-frame-mobile.png";
import { IconButton } from "./IconButton";
import iconPhone from "../assets/img/icons/contact/icon-phone.svg";
import iconLocation from "../assets/img/icons/contact/icon-location.svg";
import iconMail from "../assets/img/icons/contact/icon-mail.svg";

function Info() {
  return (
    <div className="myform flex flex-col border rounded-2xl w-max p-2 mx-auto  text-sm">
      <div className="border rounded-t-2xl flex">
        <img className="hidden sm:block" src={formTopFrame}></img>
        <img className="block sm:hidden" src={formTopFrameMobile}></img>
      </div>
      <div className="flex-1 grid grid-rows-3 gap-4">
        <div className="border-bottom flex flex-col items-center  sm:flex-row justify-between px-10">
          <div className="flex">
            <IconButton src={iconPhone}></IconButton>
            <span className="self-center">Phone:</span>
          </div>
          <span className="self-center ">+31 068110622</span>
        </div>
        <div className="border-bottom flex flex-col items-center  sm:flex-row justify-between px-10">
          <div className="flex">
            <IconButton src={iconLocation}></IconButton>
            <span className="self-center">Location:</span>
          </div>
          <span className="self-center ">Amsterdam</span>
        </div>
        <div className="border-bottom flex flex-col items-center  sm:flex-row justify-between px-10 gap-3 sm:gap-0">
          <div className="flex">
            <IconButton src={iconMail}></IconButton>
            <span className="self-center">Mail:</span>
          </div>
          <span className="self-center">contact@pbsamsterdam.com</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
