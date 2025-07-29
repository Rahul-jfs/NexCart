// import { useContext } from "react";
// import { Link } from "react-router";
// import CartContext from "../utils/CartContext";

// const OrderSummary = ({ bgColor }) => {
//   const { cartItems } = useContext(CartContext);

//   const subtotal = cartItems?.reduce(
//     (total, item) =>
//       total +
//       Math.floor(item.price - (item.price * item.discountPercentage) / 100) *
//         (item.quantity || 1),
//     0
//   );
//   const shipping = subtotal > 0 ? 20 : 0;
//   const tax = subtotal * 0.15;
//   const total = subtotal + shipping + tax;

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//       <div className="space-y-2">
//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <span>${subtotal?.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Shipping</span>
//           <span>${shipping?.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Tax (15%)</span>
//           <span>${tax?.toFixed(2)}</span>
//         </div>
//         <hr className="my-4" />
//         <div className="flex justify-between font-bold text-lg">
//           <span>Total</span>
//           <span>${total.toFixed(2)}</span>
//         </div>
//       </div>
//       <Link to={`${linkToPage}`}>
//         <button
//           className={`mt-6 w-full bg-${bgColor}-500 text-white py-2 px-4 rounded hover:bg-${bgColor}-700 transition cursor-pointer`}
//         >
//           Proceed to Checkout
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default OrderSummary;

import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // use react-router-dom
import CartContext from "../utils/CartContext";
import { THEME_CLASSES } from "../utils/constants";

const OrderSummary = ({
  isCheckoutPage = false,
  bgColor = "blue",
  submitForm,
}) => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems?.reduce(
    (total, item) =>
      total +
      Math.floor(item.price - (item.price * item.discountPercentage) / 100) *
        (item.quantity || 1),
    0
  );
  const shipping = subtotal > 0 ? 20 : 0;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  // Tailwind safe bg color classes mapping
  const bgClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700",
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`${THEME_CLASSES[mode]} p-6 rounded-lg ${
        mode === "dark" ? "white-shadow" : "dark-shadow"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (15%)</span>
          <span>${tax?.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {isCheckoutPage ? (
        <button
          onClick={submitForm}
          className={`${bgClasses[bgColor]} mt-6 w-full text-white py-2 px-4 rounded transition cursor-pointer`}
        >
          Place Order
        </button>
      ) : (
        <Link to="/checkout">
          <button
            className={`${bgClasses[bgColor]} mt-6 w-full text-white py-2 px-4 rounded transition cursor-pointer`}
          >
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
