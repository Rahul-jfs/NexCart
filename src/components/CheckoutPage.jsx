import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import CartContext from "../utils/CartContext";
import { THEME_CLASSES } from "../utils/constants";
import OrderSummary from "./OrderSummary";
import ShippingInputBox from "./ShippingInputBox";
import ShopNow from "./ShopNow";

const CheckoutPage = () => {
  const { cartItems, setCartItem } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [hasOrdered, setHasOrdered] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      if (!value.trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
        newErrors.email = "Invalid email address";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setHasOrdered(true);
      setCartItem([]);
    }
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div className={`${THEME_CLASSES[mode]} my-6 p-4  shadow-xl  rounded-xl`}>
      <h1 className="text-center text-3xl font-bold p-2 m-3">CheckOut </h1>

      {hasOrdered ? (
        <div className="text-green-600 text-2xl font-semibold text-center py-10">
          ✅ Thank you! Your order has been placed successfully.
        </div>
      ) : cartItems?.length === 0 ? (
        <ShopNow />
      ) : (
        <div className="container mx-auto px-6 py-10">
          {hasOrdered ? (
            <div className="text-green-600 text-2xl font-semibold text-center">
              ✅ Your order has been placed. Thank you!
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Shipping Info Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-6">
                  Shipping Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ShippingInputBox
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        handleChange={handleChange}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <ShippingInputBox
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        handleChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <ShippingInputBox
                      type="text"
                      name="address"
                      placeholder="Address"
                      handleChange={handleChange}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <ShippingInputBox
                        type="text"
                        name="city"
                        placeholder="City"
                        handleChange={handleChange}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <ShippingInputBox
                        type="text"
                        name="state"
                        placeholder="State"
                        handleChange={handleChange}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.state}
                        </p>
                      )}
                    </div>
                    <div>
                      <ShippingInputBox
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        handleChange={handleChange}
                      />
                      {errors.zip && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.zip}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Right: Order Summary */}
              {cartItems?.length === 0 ? null : (
                <OrderSummary
                  isCheckoutPage="true"
                  bgColor="green"
                  submitForm={(e) => handleSubmit(e)}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
