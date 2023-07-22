import React from "react";
import { HiMailOpen } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";

function ContactPesan() {
  return (
    <>
      <div>
        <h2 className="text-2xl text-black font-bold flex justify-center">
          Contact
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-full text-blue-500 bg-white shadow-xl">
          <HiMailOpen size="40" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl text-start text-black">Email</h1>
          <h1 className="text-lg text-black text-start hover:text-blue-500 cursor-pointer">
            samuderanst@gmail.com
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="border p-2 rounded-full text-blue-500 bg-white shadow-xl">
          <FaMapLocationDot size="40" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold text-xl text-start text-black">Location</h1>
          <h1 className="text-lg text-start hover:text-blue-500 cursor-pointer text-black">
            Tapanuli Selatan, Sumatra Utara, <br className="br-location" />
            Indonesia
          </h1>
        </div>
      </div>
    </>
  );
}

export default ContactPesan;
