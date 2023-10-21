import Navbar from "./Nav/Navbar";
import ProductPage from "./Products/PrductsPage";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();
  const [onCartPage, setOnCartPage] = useState(false);
  // add to cart function
  function addToCart(id) {
    products.map((item) => {
      if (item.id == id) {
        setCart(cart ? [...cart, item] : [item]);
      }
    });
  }

  console.log(onCartPage);
  //cart Pages
  function OnCartPage() {
    setOnCartPage(!onCartPage);
  }

  useEffect(() => {
    const externalProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    externalProducts();
  }, []);
  return (
    <>
      <Navbar cart={cart} onCartPage={OnCartPage} />
      <ProductPage products={products} addToCart={addToCart} />
      <CartPage onCartPage={onCartPage} OnCartPage={OnCartPage} />
    </>
  );
}

function CartPage({ onChartPage, OnCartPage }) {
  return (
    <div
      className={" p-12  absolute w-full top-0 h-full hidden bg-slate-50 z-50"}
    >
      <button
        className="absolute right-3 top-2 text-2xl text-red-600 font-medium"
        onClick={() => OnCartPage()}
      >
        X
      </button>
      <div className="flex justify-between mb-5">
        <h1 className="font-medium text-3xl">Shoping Cart</h1>
        <span>3 Items</span>
      </div>
      <div className="flex justify-between  text-slate-500 text-sm mb-2">
        <span>Items</span>
        <div className="flex w-1/2 justify-between">
          <span>Size</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-4">
        <div className="flex gap-2  w-1/2">
          <div>
            <img
              src="https://picsum.photos/id/237/200"
              className="w-20"
              alt=""
            />
          </div>
          <div className="flex justify-evenly flex-col">
            <h1 className="text-lg">Title Brand</h1>
            <span className="text-sm text-slate-500">Category</span>
          </div>
        </div>
        <div className="flex justify-between  w-1/2 items-center">
          <div>
            <h1>100 Ml</h1>
          </div>
          <div className="flex gap-2 items-center">
            <button className="w-5 h-5 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600">
              -
            </button>
            <span>0</span>
            <button className="w-5 h-5 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600">
              +
            </button>
          </div>
          <div className="">
            <h1>$700</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
