import React from "react";

function ThreeSection() {
  return (
    <>
      <div className="third-left w-full flex items-center justify-center">
        <img
          src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/feature-1-kurikulum-global-3.png"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <div className="third-right w-full flex flex-col justify-center p-4 bg-teal-100 rounded-lg">
        <p>
          ada 100+ components, dengan berbagai framework dan css yang lengkap.
        </p>
        <ul className="text-zinc-400 pt-5">
          <li>- Berbagai bahasa pemrograman dan Framework</li>
          <li>- Tailwind css</li>
          <li>- Berbagai components</li>
          <li>- Slide library</li>
        </ul>
      </div>
    </>
  );
}

export default ThreeSection;
