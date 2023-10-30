import InputSearch from "./InputSearch";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../context";

export default function Navbar() {
  const { navbarChange } = useContext(GlobalContext);
  const [onList, setOnlist] = useState(false);
  function onListEvent() {
    setOnlist(!onList);
  }
  return (
    <nav
      className={
        "sm:flex sm:justify-around sm:w-full sm:py-1 sm:z-50 sm:fixed sm:items-center sm:shadow-lg justify-around w-[100%]  flex  py-2" +
        (navbarChange ? " sm:bg-primary bg-opacity-100" : " sm:bg-white")
      }
    >
      <Logo navbarChange={navbarChange} />
      <List onList={onList} onListEvent={onListEvent} />
      <InputSearch onListEvent={onListEvent} />
      {/* <div className="flex">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-xl  text-slate-700 cursor-pointer hover:text-text"
          onClick={() => onEventCart()}
        />
        <h1 className="text-white text-[10px] -mt-1 -ml-1 indent-px z-10 bg-green-600 w-4 text-center rounded-full h-4">
          {cartLength || 0}
        </h1>
      </div> */}
    </nav>
  );
}

function Logo({ navbarChange }) {
  return (
    <div>
      <h1 className="sm:first-line sm:text-3xl font-bold text-slate-600 text-xl">
        Nav-
        <span className={navbarChange ? "text-slate-50" : " text-primary"}>
          bar
        </span>
      </h1>
    </div>
  );
}
