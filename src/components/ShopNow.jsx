import { Link } from "react-router";

const ShopNow = () => {
  return (
    <div className="text-center">
      <p className="text-gray-600 text-xl">Your cart is empty.</p>
      <Link to="/">
        <button className="m-4 p-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default ShopNow;
