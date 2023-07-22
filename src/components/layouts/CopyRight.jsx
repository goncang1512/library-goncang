import React from "react";
import { AiFillGithub } from "react-icons/ai";

function CopyRight() {
  return (
    <div className="copy-page bg-teal-600 text-white flex justify-between items-center h-32">
      <div className="copy-right h-full flex justify-between items-center w-full">
        <div>
          <h1 className="text-lg flex items-center w-full">
            Copyright © 2023.
          </h1>
        </div>
        <div>
          <a href="">
            <AiFillGithub
              size="27"
              className="icon-copy hover:scale-110 cursor-pointer text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
