import Card from "./Cards";
import { useState, useEffect } from "react";
function ProductPage({ products, addToCart }) {
  const [all, setAll] = useState(products);
  // useEffect(() => {
  //   setAll(products);
  // }, []);
  function onElectronics() {
    setAll(
      products.filter((item) => {
        return item.category == "electronics";
      })
    );
  }
  function onAll() {
    setAll(products);
  }
  function onWomen() {
    setAll(
      products.filter((item) => {
        return item.category == "women's clothing";
      })
    );
  }
  function onMan() {
    setAll(
      products.filter((item) => {
        return item.category == "men's clothing";
      })
    );
  }
  return (
    <div className="w-full flex flex-col gap-5 bg-slate-300 p-5">
      <Kategoris
        onElectronics={onElectronics}
        onAll={onAll}
        onWomen={onWomen}
        onMan={onMan}
      />
      <Card products={products} addToCart={addToCart} />
    </div>
  );
}

function Kategoris({ onElectronics, onAll, onWomen, onMan }) {
  return (
    <div className="flex w-1/2 justify-around">
      <li
        onClick={onAll}
        className="list-none font-medium text-primary cursor-pointer text-sm
    after:content-[''] after:block after:border-primary after:border-[1.2px] after:scale-x-0 hover:after:scale-x-110 after:transition-all"
      >
        All
      </li>
      <li
        onClick={onElectronics}
        className="list-none font-medium text-primary cursor-pointer text-sm
    after:content-[''] after:block after:border-primary after:border-[1.2px] after:scale-x-0 hover:after:scale-x-110 after:transition-all"
      >
        Electronics
      </li>
      <li
        onClick={onWomen}
        className="list-none font-medium text-primary cursor-pointer text-sm
    after:content-[''] after:block after:border-primary after:border-[1.2px] after:scale-x-0 hover:after:scale-x-110 after:transition-all"
      >
        Women's Clothing
      </li>
      <li
        onClick={onMan}
        className="list-none font-medium text-primary cursor-pointer text-sm
    after:content-[''] after:block after:border-primary after:border-[1.2px] after:scale-x-0 hover:after:scale-x-110 after:transition-all"
      >
        Man's Clothing
      </li>
    </div>
  );
}

export default ProductPage;
