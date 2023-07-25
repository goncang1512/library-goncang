import React from "react";
import "../../../style/components.css";

function CardCompt(props) {
  const { children } = props;
  return (
    <>
      <div className="card-code w-screen glass flex md:flex-row flex-col justify-center items-center">
        {children}
      </div>
    </>
  );
}

const Figure = (props) => {
  const { children } = props;
  return (
    <>
      <figure className="figure-fix w-96 h-96 flex justify-center items-center relative border border-teal-400 text-center">
        <h2 className="absolute top-0 bg-teal-400 w-full text-center py-2 text-white">
          Review
        </h2>
        {children}
      </figure>
    </>
  );
};

const Code = (props) => {
  const { children, classCode } = props;
  return (
    <>
      <div
        className={`${classCode} hidden code-fix w-96 h-96 border border-teal-400 relative items-start`}
      >
        <h2 className="absolute top-0 text-center w-full bg-teal-400 py-2 text-white">
          Code
        </h2>
        <div className="overflow-y-auto h-96 pt-12 px-2">{children}</div>
      </div>
    </>
  );
};

CardCompt.Figure = Figure;
CardCompt.Code = Code;

export default CardCompt;
