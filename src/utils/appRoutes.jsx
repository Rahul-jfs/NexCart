import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import Cart from "../components/Cart";
import CategoryPage from "../components/CategoryPage";
import CheckoutPage from "../components/CheckoutPage";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService";
import Contact from "../components/Contact";

const AboutUs = lazy(() => import("../components/AboutUs"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<h1 className="br-red-200">About us Page Loading....</h1>}
          >
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/:slug", element: <CategoryPage /> },
      { path: "products/category/:slug", element: <CategoryPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/terms", element: <TermsOfService /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export const appRouter = createBrowserRouter(routes, { basename: "/NexCart" });
