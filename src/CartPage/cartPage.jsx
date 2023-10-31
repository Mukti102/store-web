import CartsCard from "./CartsCards";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function CartPage() {
  const { onCartPage, cart, cartLength } = useContext(GlobalContext);
  console.log(cart);
  return (
    <>
      <div
        className={
          "sm:p-14 px-2 py-12 fixed  w-full top-0  h-[100%] bg-white shadow-lg z-50 transition-all ease-in-out delay-300" +
          (onCartPage ? " top-0" : " top-[-100%]")
        }
      >
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="absolute left-5 top-5 text-3xl text-slate-400 font-medium hover:text-slate-500 cursor-pointer"
          />
        </Link>
        <div className="flex justify-between my-5">
          <h1 className="font-medium sm:text-3xl text-2xl">Shoping Cart</h1>
          <span>{(cart && cartLength) || 0} Items</span>
        </div>
        <CartsCard />
      </div>
    </>
  );
}

export default CartPage;
