import React from "react";
import User from "../../fragments/homefragments/Pengguna";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <p className="text-hero text-center font-mono font-bold">
        Dapatkan inspirasi <br />
        dari komponen website paling hits saat ini dan ciptakan tampilan yang
        indah untuk website anda.
      </p>
      <User />
      <Link
        to="/components"
        className="bg-teal-400 py-3 px-8 text-white rounded-lg hover:bg-teal-500 ease-in duration-100"
      >
        Cari Sekarang
      </Link>
    </>
  );
}

export default HeroSection;
