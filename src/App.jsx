import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CartContext from "./utils/CartContext";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [cartItem, setCartItem] = useState(() => {
    // Load from localStorage once during initialization
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <Provider store={appStore}>
      <CartContext.Provider value={{ cartItems: cartItem, setCartItem }}>
        <div className="max-w-7xl p-8 m-auto bg-gray-900">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </CartContext.Provider>
    </Provider>
  );
}

export default App;
