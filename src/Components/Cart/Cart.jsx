import React, { useEffect, useState } from "react";
import "./Cart.css";
function Cart({ cart, setCart, handleChange, size }) {
  const [price, setPrice] = useState(0);

  const handelPrice = () => {
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.amount * item.price;
    });
    setPrice(totalPrice);
  };

  const handelRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  useEffect(() => {
    handelPrice();
  });
  return (
    <div className="cart">
      {cart <= 0 ? (
        <img className="emptyCart" src="images/emptycart.png" alt="img" />
      ) : (
        <div className="cartList">
          {cart.map((item) => (
            <div className="cartItem" key={item.id}>
              <img src={`images/${item.ItemImg}`} alt="img" />
              <div className="info">
                <h4>{item.ItemName}</h4>
                <span>Rating {item.ratings}</span>
                <span>₹ {item.price}</span>
                <div>
                  <button
                    onClick={() => handleChange(item, -1)}
                    className="btn-decrement">
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => handleChange(item, +1)}
                    className=" btn-increment">
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => handelRemove(item.id)}>
                Remove
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="total-product">
        <h1>TOTAL PRICE</h1>
        <div className="qty">
          <span>qty</span>
          <span>{size}</span>
        </div>
        <div class="total-price">
          <h2>Total Price </h2>
          <h2>{price}</h2>
        </div>
        <button className="order">Order</button>
      </div>
    </div>
  );
}

export default Cart;
