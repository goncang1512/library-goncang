import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import RightFourSection from "../../fragments/homefragments/RightFourSection";

function FourSection() {
  return (
    <>
      <div className="container-color bg-teal-400 w-full h-full flex flex-col md:flex-row h-2/4 text-white p-5 gap-5">
        <div className="w-9/12 h-96 flex flex-col justify-center md:px-9 px-3 gap-3">
          <h1 className="text-2xl font-bold">
            Temukan komponen yang unik hanya di sini.
          </h1>
          <p>Di Library tersedia bebagai komponen html dan css.</p>
          <Link
            to="/components"
            className="flex items-center gap-2 hover:translate-x-3 ease-in duration-150"
          >
            Lihat semua komponen <BsFillArrowRightCircleFill />
          </Link>
        </div>
        <div className="w-full h-96 overflow-y-hidden hover:overflow-y-auto relative flex items-end justify-center flex-col  gap-3 p-2">
          <div className="flex items-end justify-center flex-col  gap-3 p-2">
            <RightFourSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default FourSection;
