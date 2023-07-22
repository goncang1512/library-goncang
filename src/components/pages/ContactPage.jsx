import React from "react";
import Navbar from "../layouts/Navbar";
import CopyRight from "../layouts/CopyRight";
import "../../style/contact.css";
import KirimPesan from "../layouts/contact/KirimPesan";
import ContactPesan from "../layouts/contact/ContactPesan";

function ContactPage() {
  return (
    <div>
      <div className="z-50">
        <Navbar />
      </div>
      <div className="card-body-container">
        <div className="card-container flex md:flex-row flex-col border rounded-xl shadow-xl">
          {/* card bagian kanan about me */}
          <div className="left bg-stone-100 w-full flex flex-col justify-center gap-5">
            <ContactPesan />
          </div>
          {/* card bagian kanan kirim email */}
          <div className="right flex flex-col items-center justify-center  h-full w-full bg-white">
            <KirimPesan />
          </div>
        </div>
      </div>
      <div className="w-full">
        <CopyRight />
      </div>
    </div>
  );
}

export default ContactPage;
