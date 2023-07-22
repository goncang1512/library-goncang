import React from "react";
import { Link } from "react-router-dom";

function ButtonNavbar(props) {
  const { to, classname, children } = props;
  return (
    <li
      className={`${classname} list-none cursor-pointer py-3 px-5 text-md font-bold`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default ButtonNavbar;
