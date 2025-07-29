import { useSelector } from "react-redux";
import { THEME_CLASSES } from "../utils/constants";

const Contact = () => {
  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-10 ${THEME_CLASSES[mode]} shadow-xl  rounded-xl p-3`}
    >
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">Email: support@nexcart.com</p>
      <p className="mb-2">Phone: +1 (555) 123-4567</p>
      <p className="mb-2">Address: 123 Main Street, New York City, USA</p>
    </div>
  );
};

export default Contact;
