import { useContext } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import CartContext from "../utils/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { THEME_CLASSES } from "../utils/constants";

const Header = () => {
  const contextData = useContext(CartContext);
  const { cartItems } = contextData;

  const mode = useSelector((store) => store.theme.mode);
  console.log(mode);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`${THEME_CLASSES[mode]} sticky top-0 z-30 my-2 flex justify-between items-center shadow-xl  rounded-xl p-3 transition duration-00`}
    >
      <div className="basis-1/4">
        <h1>
          <Link to="/">
            <span className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              NexCart
            </span>
          </Link>
        </h1>
      </div>
      <div className="basis-2/4">
        <div className="flex items-center max-w-md w-full border-2 rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search for product..."
            className="rounded-l-lg p-2 w-full outline-none border-r-transparent"
          />
          <button
            className=" text-2xl rounded-r-lg p-2 bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className=" basis-1/4 ">
        <ul className="flex justify-around items-center  text-xl">
          <li>
            <Link to="/about"> About Us </Link>
          </li>

          <li>
            <button
              onClick={() => handleToggle()}
              className={`border-2 px-4 py-2 text-sm rounded ${THEME_CLASSES[mode]}`}
            >
              {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>

          <li className="relative">
            <Link to="/cart">
              <FaShoppingCart />
              {cartItems?.length === 0 ? null : (
                <span className="absolute -top-3 -right-3 bg-red-600 px-2 text-sm rounded-lg">
                  {cartItems?.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
