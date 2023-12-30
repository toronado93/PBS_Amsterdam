/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavigationItems({ item }) {
  return (
    // <Link
    //   onClick={toogleIsActive}
    //   key={item.name}
    //   to={item.to}
    //   className=""
    //   aria-current={item.current ? "page" : undefined}
    // >
    //   {item.name}
    // </Link>

    <ScrollLink
      className="cursor-pointer transition ease-in-out delay-150 hover:text-red-600"
      to={item.to}
      smooth={true}
      duration={500}
    >
      {item.name}
    </ScrollLink>
  );
}

export default NavigationItems;
