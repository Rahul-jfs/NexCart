import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CartContext from "../utils/CartContext";
import { THEME_CLASSES } from "../utils/constants";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import ShopNow from "./ShopNow";

const CartPage = () => {
  const { cartItems, setCartItem } = useContext(CartContext);

  const clearCart = () => {
    setCartItem([]);
    localStorage.removeItem("cart");
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-4 ${THEME_CLASSES[mode]} shadow-xl  rounded-xl p-3`}
    >
      <h1 className="text-center text-3xl font-bold p-2 m-3">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <ShopNow />
      ) : (
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-2">
              {cartItems?.length === 0 ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                  <p className="text-gray-600">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-4 text-right">
                  <button
                    className="bg-red-800 text-white p-2 rounded-lg cursor-pointer hover:bg-red-700"
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                  {cartItems?.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Order Summary */}
            {cartItems.length === 0 ? null : (
              <OrderSummary bgColor="blue" linkToPage="/checkout" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
