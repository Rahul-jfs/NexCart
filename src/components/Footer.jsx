import { useSelector } from "react-redux";
import { Link } from "react-router";
import { THEME_CLASSES } from "../utils/constants";

const Footer = () => {
  const mode = useSelector((store) => store.theme.mode);

  return (
    <footer className={`${THEME_CLASSES[mode]} py-6 mt-10 rounded-lg`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}
          <Link to="/">
            <span className="text-xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              NexCart
            </span>
          </Link>
          . All rights reserved.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link to="/privacy" className="hover:text-gray-500 text-sm">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-500 text-sm">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-gray-500 text-sm">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
