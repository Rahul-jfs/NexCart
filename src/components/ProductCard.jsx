import { useContext } from "react";
import { useSelector } from "react-redux";
import CartContext from "../utils/CartContext";
import { THEME_CLASSES } from "../utils/constants";

const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    availabilityStatus,
    discountPercentage,
    price,
    rating,
  } = product;

  const { setCartItem } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      }

      // Item doesn't exist, add with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`${
        THEME_CLASSES[mode]
      }  rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300 w-full max-w-sm ${
        THEME_CLASSES[mode]
      } p-6 rounded-lg ${mode === "dark" ? "white-shadow" : "dark-shadow"}`}
    >
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="text-sm text-gray-600">
          {availabilityStatus || "In Stock"}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-green-600">
              ${Math.floor(price - (price * discountPercentage) / 100)}
            </span>
            <span className="line-through text-sm text-gray-500 ml-2">
              ${price}
            </span>
          </div>
          <div className="text-yellow-500 font-medium">⭐ {rating}</div>
        </div>

        <div className="flex justify-between flex-col md:flex-row ">
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700">
            Add to favourite
          </button>
          <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
