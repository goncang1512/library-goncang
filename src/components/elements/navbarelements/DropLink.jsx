import React from "react";
import { Link } from "react-router-dom";

function DropLink(props) {
  const { children, to } = props;
  return (
    <>
      <Link
        to={to}
        className="hover:bg-zinc-300 flex px-3 py-3 gap-3 items-center"
      >
        {children}
      </Link>
    </>
  );
}

export default DropLink;
