import React from "react";

function CardPembelian(props) {
  const { children, className } = props;
  return (
    <div
      className={`${className} w-full md:h-screen h-full flex flex-col justify-start items-center md:p-9 p-20 gap-10 rounded-lg pt-20`}
    >
      {children}
    </div>
  );
}

const Title = (props) => {
  const { children } = props;
  return (
    <>
      <h1 className="text-4xl">{children}</h1>
    </>
  );
};

const Ception = (props) => {
  const { children } = props;
  return (
    <>
      <p className="text-sm text-center">{children}</p>
    </>
  );
};

const Price = (props) => {
  const { children } = props;
  return (
    <>
      <p className="text-5xl">{children}</p>
    </>
  );
};

CardPembelian.Title = Title;
CardPembelian.Ception = Ception;
CardPembelian.Price = Price;

export default CardPembelian;
