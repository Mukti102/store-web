import Navbar from "./Nav/Navbar";
import { useState, useEffect } from "react";
import { GlobalContext } from "./context";
import { router } from "./main";
import { RouterProvider } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [onCartPage, setOnCartPage] = useState(true);
  const [navbarChange, setNavbarChange] = useState(false);
  const body = document.getElementsByTagName("body")[0];
  body.onscroll = function () {
    window.scrollY >= 600 ? setNavbarChange(true) : setNavbarChange(false);
  };
  // CartQuantityLength
  const quantity = cart.map((element) => {
    return element.quantity;
  });
  const cartLength = quantity.reduce((a, b) => a + b, 0);

  // add to cart function
  function addToCart(id) {
    const selectProduct = products.find((item) => item.id === id);
    if (selectProduct) {
      const updateCart = [...cart] || 0;
      const existingProductItem = updateCart.find((item) => item.id === id);

      if (existingProductItem) {
        existingProductItem.quantity++;
      } else {
        updateCart.push({ ...selectProduct, quantity: 1 });
      }
      setCart(updateCart);
    }
  }

  // min quantity
  function minQuantity(id) {
    const updateCart = [...cart] || 0;
    const findItemQuantity = updateCart.find((item) => item.id === id);
    if (findItemQuantity.quantity == 0) return;
    else {
      findItemQuantity.quantity--;
    }
    setCart(updateCart);
  }

  // delete cart
  function deleteCart(id) {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  }

  //Plus quantity
  function plusQuantity(id) {
    const updateCart = [...cart] || 0;
    const findItemQuantity = updateCart.find((item) => item.id === id);
    findItemQuantity.quantity++;
    setCart(updateCart);
  }

  //cart Pages
  function onEventCart() {
    setOnCartPage(!onCartPage);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://fakestoreapi.com/products");
        const res = await result.json();
        setProducts(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        cart,
        onEventCart,
        navbarChange,
        cartLength,
        products,
        addToCart,
        onCartPage,
        onEventCart,
        minQuantity,
        plusQuantity,
        deleteCart,
      }}
    >
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export default App;
