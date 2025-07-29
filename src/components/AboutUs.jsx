import { useSelector } from "react-redux";
import { THEME_CLASSES } from "../utils/constants";

const AboutUs = () => {
  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-4 shadow-xl  rounded-xl ${THEME_CLASSES[mode]} transition duration-500`}
    >
      <h1 className="text-4xl font-bold  mb-6 text-center">About Us</h1>

      <section className="mb-10 px-5">
        <h2 className="text-2xl font-semibold  mb-2">
          Welcome to
          <span className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            NexCart
          </span>
        </h2>
        <p className=" leading-relaxed">
          We're more than just an online store — we're your trusted destination
          for handpicked products, great value, and unbeatable service. Whether
          you're shopping for essentials or something special, we make it easy,
          secure, and enjoyable.
        </p>
      </section>

      <section className="mb-10 px-5">
        <h2 className="text-2xl font-semibold  mb-2">Our Mission</h2>
        <p className=" leading-relaxed">
          To make online shopping simple, affordable, and personalized for
          everyone. We believe in curating products that improve everyday life —
          with a focus on quality, affordability, and care.
        </p>
      </section>

      <section className="mb-10 px-5">
        <h2 className="text-2xl font-semibold  mb-2">Why Shop With Us?</h2>
        <ul className="list-disc list-inside  space-y-2">
          <li>✅ Carefully selected, high-quality products</li>
          <li>🚚 Fast & reliable shipping</li>
          <li>🔒 Secure checkout with trusted payment methods</li>
          <li>📦 Easy returns & responsive customer support</li>
        </ul>
      </section>

      <section className="mb-10 px-5">
        <h2 className="text-2xl font-semibold  mb-2">Our Vision</h2>
        <p className=" leading-relaxed">
          As we grow, our goal is to build a vibrant online community and become
          your favorite destination for shopping — one you can trust for both
          everyday needs and exciting finds.
        </p>
      </section>

      <section className="px-5">
        <h2 className="text-2xl font-semibold  mb-2">Stay in Touch</h2>
        <p className=" leading-relaxed">
          Have questions or feedback? We'd love to hear from you! Email us
          anytime at{" "}
          <a
            href="mailto:support@nexcart.com"
            className="text-blue-400 underline"
          >
            support@nexcart.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
