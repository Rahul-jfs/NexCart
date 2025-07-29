import { useSelector } from "react-redux";
import { THEME_CLASSES } from "../utils/constants";

const ShippingInputBox = ({ type, name, value, placeholder, handleChange }) => {
  const mode = useSelector((store) => store.theme.mode);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`p-3 border rounded w-full ${THEME_CLASSES[mode]}`}
      onChange={handleChange}
      value={value}
      required
    />
  );
};

export default ShippingInputBox;
