import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  // Clear cart and localStorage after confirming order
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 5);
    return orderDate.toLocaleDateString("en-GB");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
          {/* Order Info */}
          <div className="flex flex-col md:flex-row md:justify-between mb-10">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-1">
                Order ID:{" "}
                <span className="font-mono text-gray-800">{checkout._id}</span>
              </h2>
              <p className="text-gray-600 text-sm">
                Order date:{" "}
                {new Date(checkout.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-emerald-700 text-sm font-medium">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-10 border-t border-gray-200 pt-6">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.color} | {item.size}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Method</h4>
              <p className="text-gray-700">PayPal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery Address</h4>
              <p className="text-gray-700">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-700">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
