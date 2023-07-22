import React from "react";
import { Link } from "react-router-dom";

function NavbarLink(props) {
  const { to, children, className } = props;
  return (
    <>
      <Link
        className={`${className} list-none cursor-pointer text-black h-12 px-3`}
        to={to}
      >
        {children}
      </Link>
    </>
  );
}

export default NavbarLink;
