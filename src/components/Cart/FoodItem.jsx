import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormatPrice from "../../Helper/FormatPrice.js";
import { IMG_CDN_URL } from "../../constant.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../utils/cartSlice.js";
import Swal from "sweetalert2";

const FoodItem = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item?.id));
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item?.id));
  };

  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantity(item?.id));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item?.price * item?.inStock || 0;
    });
    return totalPrice;
  };

  const total = calculateTotalPrice();

  return (
    <div className="w-full my-10 lg:w-auto sm:ml-10  ">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={IMG_CDN_URL + item?.imageId}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item?.name}</h3>
                      <p className="ml-4">
                        <FormatPrice
                          price={
                            isNaN(item?.price * 2)
                              ? 500 * 20
                              : (item?.price * 2) / 2
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="cartItem__incrDec flex items-center text-lg">
                      <button
                        className="mr-2"
                        onClick={() => handleDecrementQuantity(item)}
                      >
                        -
                      </button>
                      <p className="text-green-500">{item?.inStock}</p>
                      <button
                        className="ml-2 "
                        onClick={() => handleIncrementQuantity(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-[#fc8019] hover:text-[#fdaa65]"
                        onClick={() => {
                          handleRemoveItem(item);
                          toast.success("Item removed from cart", {
                            className: "bg-green-500 text-white",
                            progressClassName: "bg-green-700",
                          });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-7">
        <button
          className="flex items-center justify-center h-10 rounded-md border border-transparent bg-[#fc8019] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#fdaa65] "
          onClick={() => {
            Swal.fire({
              title: "Do you want to clear cart?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, clear it!",
            }).then((result) => {
              if (result.isConfirmed) {
                handleClearCart();
                Swal.fire({
                  title: "Cleared!",
                  text: "Your cart has been cleared.",
                  icon: "success",
                });
              }
            });
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="border-t border-gray-200 w-full m-auto mt-10 sm:px-6">
        <div className="flex justify-between m-full text-base font-medium sm:w-full sm:m-auto text-gray-900 flex-col">
          <p className="mt-4">Bill Details</p>
          <div className="flex justify-start items-center gap-x-5">
            <p>Item Total</p>
            <p>
              <FormatPrice price={calculateTotalPrice()} />
            </p>
          </div>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <button
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-[#fc8019] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#fdaa65]"
            onClick={() => {
              Swal.fire({
                title: "Almost there! 🎉",
                text:"Review your order, double-check the details, and tap 'Place Order' when ready. We'll handle the rest and let you know once your food is on its way! 🍔🍕🍜",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, place order!",
              }).then((result) => {
                if (result.isConfirmed) {
                  handleClearCart();
                  Swal.fire({
                    title: "Order placed",
                    text: "Your order is getting ready",
                    icon: "success",
                  });
                }
              });
            }}
          >
            Checkout
          </button>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link to="/">
              <button
                type="button"
                className="font-medium text-[#fc8019] hover:text-[#fdaa65] px-3"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
