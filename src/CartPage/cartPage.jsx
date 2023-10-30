import CartsCard from "./CartsCards";
import { useContext, useState } from "react";
import { GlobalContext } from "../context";
function CartPage() {
  const { onCartPage, onEventCart, cart, cartLength } =
    useContext(GlobalContext);

  return (
    <>
      <div
        className={
          "p-14 fixed  w-full top-0  h-full bg-white shadow-lg z-50 transition-all ease-in-out delay-300" +
          (onCartPage ? " top-0" : " top-[-100%]")
        }
      >
        <button
          className="absolute right-3 top-2 text-2xl text-red-600 font-medium"
          onClick={() => onEventCart()}
        >
          X
        </button>
        <div className="flex justify-between mb-5">
          <h1 className="font-medium text-3xl">Shoping Cart</h1>
          <span>{(cart && cartLength) || 0} Items</span>
        </div>
        {/* <div className="flex justify-between  text-slate-500 text-sm mb-2">
        <span>Items</span>
        <div className="flex w-1/2 justify-between">
          <span>Size</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
      </div> */}

        <CartsCard />
      </div>
    </>
  );
}

export default CartPage;
