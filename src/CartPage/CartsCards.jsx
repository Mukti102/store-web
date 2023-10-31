import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context";
function CartsCard() {
  const { cart, minQuantity, plusQuantity, deleteCart } =
    useContext(GlobalContext);

  const [total, setTotal] = useState(0);
  console.log(total);
  // Calculate total whenever the cart changes
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  // Function to calculate total
  const calculateTotal = () => {
    let totalPrice = 0;
    if (cart && cart.length > 0) {
      cart.forEach((item) => {
        totalPrice += Total(item.price, item.quantity);
      });
    }
    setTotal(totalPrice);
  };

  // Function to calculate individual product total
  const Total = (price, quantity) => {
    return price * quantity;
  };

  if (!cart || cart.length == 0) {
    return <div className="text-slate-400">Tidak ada cart........</div>;
  } else {
    return (
      <div className="sm:flex block h-full justify-between transition-all delay-300">
        <div className="sm:px-6 px-2  w-full border-r-[2px]  border-slate-300 overflow-y-scroll sm:h-[92%] h-1/2 scrollbar-hide">
          {cart.map((item, index) => (
            <div
              className="flex justify-between mb-3 py-3 border-b-[1.6px] items-center"
              key={index}
            >
              <div className="mr-6 text-slate-500 font-thin text-lg">
                <button onClick={() => deleteCart(item.id)}>X</button>
              </div>
              <div className="flex gap-4 w-1/2">
                <div>
                  <img src={item.image} className="w-16" alt="" />
                </div>
                <div className="flex justify-evenly flex-col">
                  <h1 className="text-sm">{item.title}</h1>
                  <span className="text-xs text-slate-500">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-1/2 items-center">
                <div>
                  <h1 className="text-xs">100 Ml</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    className="w-4 h-4 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600"
                    onClick={() => minQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    className="w-4 h-4 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600"
                    onClick={() => plusQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="">
                  <h1 className="text-sm font-semibold text-slate-600">
                    ${Total(item.price, item.quantity)}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:w-1/2 w-full h-1/2 px-3">
          <h1 className="text-xl text-slate-500 pb-2">Cart Total</h1>
          <hr className="mb-2" />
          <div>
            <div className="flex justify-between py-1">
              <h3 className="text-xs text-slate-400">Shooping</h3>
              <span className="text-xs text-slate-500 font-medium">Free</span>
            </div>
            <div className="flex justify-between py-1">
              <h3 className="text-xs text-slate-400">Ongkos Kirim</h3>
              <span className="text-xs text-slate-500 font-medium">Free</span>
            </div>
            <div className="flex justify-between py-1">
              <h3 className="text-xs text-slate-400">Subtotal</h3>
              <span className="text-xs text-slate-500 font-medium">$0</span>
            </div>
          </div>
          <hr className="border-slate-500 border-[1px] mt-2" />
          <div className="flex justify-between font-medium mt-2">
            <h1>Total</h1>
            <h2>${total}</h2>
          </div>
          <button className="bg-primary hover:bg-slate-800 hover:text-slate-100 mx-auto text-xs w-full font-medium text-slate-800 px-3 py-2 mt-5 cursor-pointer">
            CHECK OUT
          </button>
        </div>
      </div>
    );
  }
}

export default CartsCard;
