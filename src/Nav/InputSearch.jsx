import { useContext } from "react";
import { GlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons"; // Mengganti icon dengan nama yang benar
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InputSearch({ onListEvent }) {
  const { navbarChange, onEventCart, cartLength } = useContext(GlobalContext);
  const [openSearch, setOpenSearch] = useState(false);

  function onSearch() {
    setOpenSearch(!openSearch);
  }

  return (
    <div className="flex gap-1  items-center">
      <input
        type="text"
        className={
          "px-2 py-1 outline-none rounded-sm bg-opacity-25 text-slate-100 placeholder:text-slate-50 transition-all duration-300 " +
          (navbarChange ? "bg-slate-200" : "bg-slate-900") +
          (openSearch ? " w-[300px]" : " w-0 bg-transparent") // Mengganti "w-[0px]" dengan "w-0"
        }
        placeholder="Search..."
      />
      <FontAwesomeIcon
        icon={faSearch} // Mengganti icon dengan nama yang benar
        className="sm:text-xl sm:text-slate-700 sm:cursor-pointer sm:mx-1 hover:text-text text-sm"
        onClick={() => onSearch()}
      />
      <div className="flex">
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="sm:text-xl  sm:text-slate-700 cursor-pointer hover:text-text text-sm"
          />
        </Link>
        <h1 className="text-white sm:text-[10px] -mt-1 -ml-1 indent-px z-10 bg-green-600 sm:w-4 sm:text-center rounded-full sm:h-4 h-3 w-3 text-[8px] text-center">
          {cartLength || 0}
        </h1>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="sm:hidden text-sm cursor-pointer hover:text-text"
        onClick={() => onListEvent()}
      />
    </div>
  );
}
