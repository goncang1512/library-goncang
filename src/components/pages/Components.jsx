import React from "react";
import "../../style/components.css";
import Navbar from "../layouts/Navbar";
import CopyRight from "../layouts/CopyRight";
import CardComponents from "../layouts/componentlayouts/CardComponents";

function Compnents() {
  return (
    <div>
      <div className="w-screen">
        <Navbar />
      </div>
      <section className="section-example pt-28 flex flex-wrap justify-evenly gap-10">
        <CardComponents />
      </section>
      <div>
        <CopyRight />
      </div>
    </div>
  );
}

export default Compnents;
