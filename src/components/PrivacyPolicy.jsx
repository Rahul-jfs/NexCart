import { useSelector } from "react-redux";
import { THEME_CLASSES } from "../utils/constants";

const PrivacyPolicy = () => {
  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-10 ${THEME_CLASSES[mode]} shadow-xl  rounded-xl p-3`}
    >
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        We value your privacy. This policy explains how we collect, use, and
        protect your information.
      </p>
      <p className="mb-4">
        We do not sell your data to third parties. Information collected is used
        only to improve your experience with our services.
      </p>
      <p>For questions, please contact us at support@nexcart.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
