import React from "react";
import "../../style/components.css";
import Navbar from "../layouts/Navbar";
import CopyRight from "../layouts/CopyRight";
import CardComponents from "../layouts/componentlayouts/CardComponents";

function Compnents() {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <section className="section-example pt-28 pb-5 flex flex-wrap gap-10">
        <CardComponents />
      </section>
      <div>
        <CopyRight />
      </div>
    </div>
  );
}

export default Compnents;
