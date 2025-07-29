import { useContext } from "react";
import CartContext from "../utils/CartContext";

const CartItem = ({ item }) => {
  const { setCartItem } = useContext(CartContext);
  const deleteItem = (id) => {
    setCartItem((items) => items.filter((item) => item.id != id));
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-md shadow-sm">
      <div className="flex items-center space-x-4">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
        )}
        <div>
          <h3 className="text-lg font-medium">{item.title}</h3>
          <div className="py-2 flex gap-5 items-center">
            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-right font-semibold">
              $
              {Math.floor(
                item.price - (item.price * item.discountPercentage) / 100
              )}
            </p>
          </div>
        </div>
      </div>
      <button
        className="text-right font-semibold bg-red-600 p-3 rounded-lg text-white cursor-pointer hover:bg-red-700"
        onClick={() => deleteItem(item.id)}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
