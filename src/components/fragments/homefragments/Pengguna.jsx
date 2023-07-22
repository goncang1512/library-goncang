import React from "react";
import { TbWorld } from "react-icons/tb";
import { BiSolidComponent } from "react-icons/bi";

function Pengguna() {
  return (
    <div className="flex gap-9">
      <p className="flex items-center gap-2 text-sm text-zinc-400">
        <BiSolidComponent size="25" />
        <span className="text-xl text-black">3</span>components
      </p>
      <p className="flex items-center gap-2 text-zinc-400 text-sm">
        <TbWorld size="25" />
        aktif di <span className="text-xl text-black">1</span> negara
      </p>
    </div>
  );
}

export default Pengguna;
