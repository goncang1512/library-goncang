import React from "react";
import { Link } from "react-router-dom";

function SecondSection() {
  return (
    <>
      <div className="w-full ml-20 flex md:pl-20 pl-0 flex-col gap-2">
        <p className="title-home-second w-3/4 text-white md:text-4xl text-2xl">
          Temukan stylemu di sini sekarang juga
        </p>
        <p className="w-3/4 text-teal-400 text-lg text-start">
          Mulai dengan tekan tombol di bawah
        </p>
        <Link
          to="/components"
          className="w-3/5 bg-teal-400 py-3 px-6 rounded-sm text-md text-white hover:bg-teal-500"
        >
          Apa yang anda ingin cari ?
        </Link>
      </div>
      <div className="right-home-second w-full text-center">
        <img
          src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-hero.png"
          alt=""
        />
      </div>
    </>
  );
}

export default SecondSection;
