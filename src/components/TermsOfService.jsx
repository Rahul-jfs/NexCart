import { useSelector } from "react-redux";
import { THEME_CLASSES } from "../utils/constants";

const TermsOfService = () => {
  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-10 ${THEME_CLASSES[mode]} shadow-xl  rounded-xl p-3`}
    >
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        By using our website, you agree to abide by our terms and conditions.
      </p>
      <p className="mb-4">
        Do not misuse our services. We reserve the right to terminate access if
        terms are violated.
      </p>
      <p>
        These terms may change over time. Please review them regularly for
        updates.
      </p>
    </div>
  );
};

export default TermsOfService;
