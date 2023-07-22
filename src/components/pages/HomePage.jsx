import React from "react";
import "../../style/home.css";
import Navbar from "../layouts/Navbar";
import CopyRight from "../layouts/CopyRight";
import HeroSection from "../layouts/homelayouts/HeroSection";
import SecondSection from "../layouts/homelayouts/SecondSection";
import ThirdSection from "../layouts/homelayouts/ThreeSection";
import LangganaSection from "../layouts/homelayouts/LangganaSection";
import FourSection from "../layouts/homelayouts/FourSection";

function HomePage() {
  return (
    <div className="w-full h-screen">
      <div className="z-50">
        <Navbar />
      </div>
      <section className="home-page pt-24">
        <div className="hero-section h-3/4 flex pt-20 pb-16 justify-center items-center flex-col gap-6">
          <HeroSection />
        </div>

        <div className="home-second-container h-screen w-screen relative text-red-500 flex md:flex-row flex-col justify-center items-center">
          <SecondSection />
        </div>

        <div className="home-container w-full gap-10">
          <div className="section-tiga flex md:flex-row flex-col h-full pt-20">
            <ThirdSection />
          </div>
          <div className="container-langganan flex md:flex-row flex-col gap-7 h-full md:mt-8 mt-5">
            <LangganaSection />
          </div>
        </div>
        <div className="home-container w-full h-full flex justify-between">
          <FourSection />
        </div>
        <div className="home-container w-full h-full flex md:flex-row flex-col">
          <div className="bg-yellow-200 p-5 w-full md:h-screen h-full flex justify-center items-center md:order-1 order-2 shadow-xl md:rounded-ss-lg md:rounded-es-lg rounded-es-lg rounded-ee-lg">
            <p className="text-lg">
              Tetapkan tekadmu dengan kuat, dan berlarilah menuju dunia coding
              yang menakjubkan! Dalam setiap baris kode, kamu menciptakan
              keajaiban di dunia digital. Jangan biarkan hambatan menghalangimu,
              karena di balik setiap tantangan, kesempatan tumbuh untuk belajar
              dan berkembang. Setiap langkah maju membawa kamu lebih dekat pada
              keahlian yang luar biasa.
            </p>
          </div>
          <div className="p-5 relative w-full h-screen md:order-2 order-1 shadow-xl md:rounded-ee-lg md:rounded-se-lg rounded-none">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="h-72 w-3/4 object-cover absolute top-24 right-0 z-20 rounded-lg m-5"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="h-72 w-3/4 object-cover absolute bottom-24 left-0 rounded-lg m-5"
            />
          </div>
        </div>
      </section>
      <div className="w-full">
        <CopyRight />
      </div>
    </div>
  );
}

export default HomePage;
