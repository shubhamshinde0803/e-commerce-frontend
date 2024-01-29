import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";

import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { Button } from "@mui/material";

const OrderSummary = () => {
  console.log("inside order summary");
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div>
          <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="col-span-2">
              {order.order?.orderItems.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
              <div className="border">
                <p className="uppercase font-bold opacity-60 pb-4">
                  Price details
                </p>
                <hr />
                <div className="space-y-3 font-semibold mb-10">
                  <div className="flex justify-between pt-3 text-black">
                    <span>
                      Price{"(" + order.order?.totalItems + " Items)"}
                    </span>
                    <span>₹{order.order?.totalPrice}</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">
                      -₹{order.order?.discount}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between pt-3  font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">
                      ₹{order.order?.totalDiscountedPrice}
                    </span>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="w-full mt-5"
                  sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
