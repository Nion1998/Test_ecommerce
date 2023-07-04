import React, {useEffect, useState} from "react";
import {
  deleteShoppingCart,
  getStoredCart,
  removeFromDb,
} from "../../../utilities/fakedb";
import "./cart.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const Cart = () => {
  const cartDatas = getStoredCart();
  const loding = useNavigate();

  const removeDb = id => {
    console.log(id);
    const item = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newItem = item.filter(record => record.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(newItem));
    loding("/cart");
  };

  const increaseQuantity = id => {
    const updatedCartDatas = cartDatas.map(cartData => {
      if (cartData.id === id) {
        return {...cartData, quantity: cartData.quantity + 1};
      }
      return cartData;
    });

    updateQuantityInLocalStorage(
      id,
      updatedCartDatas.find(cartData => cartData.id === id).quantity
    );
  };

  const decreaseQuantity = id => {
    const updatedCartDatas = cartDatas.map(cartData => {
      if (cartData.id === id && cartData.quantity > 1) {
        return {...cartData, quantity: cartData.quantity - 1};
      }
      return cartData;
    });

    updateQuantityInLocalStorage(
      id,
      updatedCartDatas.find(cartData => cartData.id === id).quantity
    );
  };

  const updateQuantityInLocalStorage = (id, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    loding("/cart");
  };

  //order Summary
  var subTotal = 0;
  const cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItem.map(item => {
    subTotal += item.price * item.quantity;
    return item;
  });
  var orderSummary = {
    subTotal: subTotal,
    shipping: subTotal * 0.005,
    allTotal: subTotal + subTotal * 0.005,
  };

  return (
    <div className="container-lg">
      <div className="tab-content" id="main_form">
        <section className="d-flex justify-content-between py-4">
          <div className="cart w-67 me-0 me-md-3 me-lg-5">
            <h3 className="fs-22 px-2 px-md-3 px-lg-4 py-1 py-md-2 py-lg-3">
              Cart
              <span className="fw-light">
                (<span className="itemQuantity">{cartDatas.length}</span> Items)
              </span>
            </h3>
            <table className="table fs-15">
              <thead>
                <tr>
                  <th
                    className="ps-2 ps-md-3 ps-lg-4 align-middle w-30"
                    scope="col"
                  >
                    Product
                  </th>
                  <th className="text-center align-middle" scope="col">
                    Price
                  </th>
                  <th className="text-center align-middle" scope="col">
                    Quantity
                  </th>
                  <th className="text-center align-middle" scope="col">
                    Total Price
                  </th>
                  <th className="text-center align-middle" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                {cartDatas.map(cartData => (
                  <tr key={cartData.id}>
                    <td className="ps-2 ps-md-3 ps-lg-4 align-middle w-30">
                      <div className="d-flex align-items-center">
                        <div className="me-2 align-middle">
                          <img
                            src={cartData.thumbnail}
                            className="p-1 p-lg-2"
                            alt=""
                          />
                        </div>
                        <div>${cartData.title}</div>
                      </div>
                    </td>
                    <td className="text-center align-middle">
                      $ {cartData.price} ৳
                    </td>
                    <td className="text-center align-middle">
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className="quantity-btn align-middle"
                          onClick={() => decreaseQuantity(cartData.id)}
                        >
                          &minus;
                        </div>
                        <div className="quantity mx-2">{cartData.quantity}</div>
                        <div
                          className="quantity-btn align-middle"
                          onClick={() => increaseQuantity(cartData.id)}
                        >
                          &#43;
                        </div>
                      </div>
                    </td>
                    <td className="text-center align-middle totalPrice">
                      $ {cartData.price * cartData.quantity} ৳
                    </td>
                    <td className="text-center align-middle">
                      <Button onClick={() => removeDb(cartData.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-33 summary">
            <div className="order-summary px-3 px-md-3 px-lg-4 py-2 py-md-2 py-lg-3">
              <h3 className="fs-22 d-none d-md-block">Order Summary</h3>
              <div className="d-flex d-md-block justify-content-between align-items-center">
                <div className="w-100 me-5 me-md-0">
                  <div className="py-0 py-md-2 py-lg-3">
                    <div className="fs-15 d-flex justify-content-between mb-0 mb-md-2 mb-lg-4">
                      <div>Sub Total</div>
                      <div>
                        <span className="subTotal"></span> ৳{" "}
                        {orderSummary.subTotal}
                      </div>
                    </div>
                    <div className="fs-15 d-flex justify-content-between mb-md-2 mb-1">
                      <div>Shipping</div>
                      <div>
                        <span className="shipping"></span> ৳{" "}
                        {orderSummary.shipping}
                      </div>
                    </div>
                  </div>
                  <div className="fs-18 d-flex justify-content-between my-1 my-md-2 my-lg-3">
                    <div>Total</div>
                    <div className="customise-text-color-2">
                      {" "}
                      <span className="allTotal"></span> ৳{" "}
                      {orderSummary.allTotal}
                    </div>
                  </div>
                </div>
                <div className="w-50 d-block d-md-none">
                  <button
                    type="button"
                    className="next-step fs-15 mb-3 p-0 p-1"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="next-step fs-15 mt-4 bg-primary text-light w-100 border-0 py-2 fw-bold rounded"
            >
              Checkout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
