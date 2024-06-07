import React from "react";
import "./Cart.css";
function Cart() {
  return (
    <div className="cart">
      <div className="cartList">
        <div className="cartItem">
          <img src="images/food1.jpg" alt="img" />
          <div className="info">
            <h4>food Item</h4>
            <span>information </span>
          </div>
          <button className="remove-btn">
            Remove
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div className="total-product">
        <h1>TOTAL PRICE</h1>
      </div>
    </div>
  );
}

export default Cart;
