import InputSearch from "./InputSearch";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Navbar({ onCartPage, cartLength, navbarChange }) {
  return (
    <nav
      className={
        "flex justify-around w-full py-3 z-50 fixed items-center shadow-lg" +
        (navbarChange ? " bg-slate-900 bg-opacity-75" : " bg-transparent")
      }
    >
      <Logo />
      <List />
      <InputSearch />
      <div className="flex">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-xl  text-white cursor-pointer hover:text-text"
          onClick={() => onCartPage()}
        />
        <h1 className="text-white text-[10px] -mt-1 -ml-1 indent-px z-10 bg-green-600 w-4 text-center rounded-full h-4">
          {cartLength || 0}
        </h1>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Nav<span className="text-text">bar</span>
      </h1>
    </div>
  );
}
