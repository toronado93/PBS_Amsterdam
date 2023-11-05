/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function NavigationItems({ item, toogleIsActive }) {
  return (
    <Link
      onClick={toogleIsActive}
      key={item.name}
      to={item.to}
      className=""
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </Link>
  );
}

export default NavigationItems;
