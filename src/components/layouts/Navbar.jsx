import React, { useState, useEffect } from "react";
import LinkIn from "../elements/NavbarLink";
import DropLink from "../elements/navbarelements/DropLink";
import Button from "../elements/navbarelements/ButtonNavbar";
import { BiBookBookmark } from "react-icons/bi";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlinePhone,
} from "react-icons/ai";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tentukan kondisi scroll yang diinginkan
      const scrollPosition = window.scrollY;
      const isTop = scrollPosition < 100; // Atur tinggi scroll saat navbar tidak menunjukkan shadow

      setIsScrolled(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu toogle
  useEffect(() => {
    const menuToggle = document.querySelector(".hum-toggle input");
    const navbarMenu = document.querySelector(".navbar-right");

    function handleClick() {
      navbarMenu.classList.toggle("slide");
    }

    menuToggle.addEventListener("click", handleClick);

    return () => {
      menuToggle.removeEventListener("click", handleClick);
    };
  }, []);

  // inpu search
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAction = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setInputValue("");
    }
  };
  return (
    <div
      className={`navbar w-full bg-white h-24 flex items-center justify-between  fixed z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <h1 className="rounded-full p-2 mr-3 text-white bg-teal-400">
        <BiBookBookmark size="50" />
      </h1>
      <div className="navbar-right flex items-center w-full">
        <div className="input-search flex items-center gap-2 relative">
          <input
            type="text"
            placeholder="Apa yang anda ingin cari ?"
            className="focus:outline-teal-400 px-5 py-3 w-72 pr-12 h-12 rounded-sm outline-none text-sm border flex justify-start relative"
            value={inputValue}
            onChange={handleInput}
            onKeyPress={handleAction}
          />
          <label htmlFor="" className="absolute right-4">
            <button
              className="flex items-center text-stone-400"
              onClick={handleAction}
            >
              <AiOutlineSearch size="25" />
            </button>
          </label>
        </div>

        <ul className="link-container flex">
          <LinkIn to="/" className="hover:bg-zinc-100 flex items-center">
            Home
          </LinkIn>
          <LinkIn
            to="/components"
            className="hover:bg-zinc-100 flex items-center"
          >
            Components
          </LinkIn>
          <LinkIn to="" className="hover:bg-zinc-100 flex items-center">
            Populer
          </LinkIn>
          <li className="dropdown">
            <LinkIn
              to=""
              className="dropbtn text-black cursor-pointer hover:bg-zinc-100 h-12 flex items-center px-3"
            >
              Lainnya
            </LinkIn>
            <div className="dropdown-content shadow-xl border rounded-md">
              <DropLink>
                <AiOutlineUser size="20" />
                Profil
              </DropLink>
              <DropLink>
                <AiOutlineSetting size="20" />
                Setting
              </DropLink>
              <DropLink>
                <BiBookBookmark size="20" />
                About us
              </DropLink>
              <DropLink to="/contact">
                <AiOutlinePhone size="20" />
                Contact
              </DropLink>
            </div>
          </li>
        </ul>

        <div className="button-container flex gap-5">
          <Button classname="text-teal-400 rounded-sm border border-teal-400 hover:bg-teal-400 hover:text-white">
            Masuk
          </Button>
          <Button classname="text-white rounded-sm bg-teal-400 hover:bg-teal-300">
            Daftar
          </Button>
        </div>
      </div>

      <div className="hum-toggle md:hidden">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" className="toggle-label">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
