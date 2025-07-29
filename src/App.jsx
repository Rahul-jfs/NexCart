import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import CategoryPage from "./components/CategoryPage";
import { lazy, Suspense, useEffect, useState } from "react";
import CartContext from "./utils/CartContext";
import Cart from "./components/Cart";
import CheckoutPage from "./components/CheckoutPage";
import FavouritePage from "./components/FavouritePage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AboutUs = lazy(() => import("./components/AboutUs"));

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

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<h1 className="br-red-200">About us Page Loading....</h1>}
          >
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/:slug", element: <CategoryPage /> },
      { path: "products/category/:slug", element: <CategoryPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/terms", element: <TermsOfService /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default App;
