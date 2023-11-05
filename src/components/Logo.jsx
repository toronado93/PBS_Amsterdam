/* eslint-disable react/prop-types */
import logo from "../assets/img/logo/amsterdam1.png";

function Logo({ heigh, width }) {
  return <img className={(heigh, width)} src={logo}></img>;
}

export default Logo;
