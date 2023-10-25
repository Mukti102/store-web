import Navbar from "./Nav/Navbar";
import ProductPage from "./Products/PrductsPage";
import CartPage from "./cartPage/cartPage";
import Hero from "./Hero/Hero";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [onCartPage, setOnCartPage] = useState(false);
  const [navbarChange, setNavbarChange] = useState(false);
  const body = document.getElementsByTagName("body")[0];
  body.onscroll = function () {
    console.log(window.scrollY);
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

  function findIndex(id) {
    cart.map((item, index) => {
      if (item.id === id) {
        return index;
      }
    });
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
  console.log(window.scrollY);
  return (
    <>
      <Navbar
        cart={cart}
        onCartPage={onEventCart}
        cartLength={cartLength}
        navbarChange={navbarChange}
      />
      <Hero />
      <ProductPage products={products} addToCart={addToCart} />
      <CartPage
        onCartPage={onCartPage}
        onEventCart={onEventCart}
        carts={cart}
        minQuantity={minQuantity}
        plusQuantity={plusQuantity}
        cartLength={cartLength}
        deleteCart={deleteCart}
      />
    </>
  );
}

export default App;
