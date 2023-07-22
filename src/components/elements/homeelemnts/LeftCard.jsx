import React from "react";

function LeftCard(props) {
  const { children, className } = props;
  return (
    <>
      <div className={`${className} scrool-section flex gap-3`}>{children}</div>
    </>
  );
}

const Big = (props) => {
  const { children, className } = props;
  return (
    <>
      <div
        className={`${className} flex items-center text-black w-4/6 h-28 rounded-lg p-2 relative shadow-2xl`}
      >
        <p>{children}</p>
      </div>
    </>
  );
};

const Mid = (props) => {
  const { children, className } = props;
  return (
    <>
      <div
        className={`${className} flex items-center bg-white text-black w-2/4 h-28 rounded-lg p-2 shadow-2xl`}
      >
        <p>{children}</p>
      </div>
    </>
  );
};

LeftCard.Big = Big;
LeftCard.Mid = Mid;
export default LeftCard;
