import React from "react";

const Menulist = ({ item, handelClick }) => {
  const { ItemImg, ItemName, ratings, price } = item;
  return (
    <>
      <div className="img-box">
        <img className="img " src={`images/${ItemImg}`} alt="food" />
      </div>
      <div className="food-text">
        <div className="food-info">
          <h3 className="food-item">{ItemName}</h3>
          <i class="fa-solid fa-star">
            <span className="rating">{ratings}</span>
          </i>
        </div>
        <span className="price">&#8377; {price}</span>
        <button
          onClick={() => {
            handelClick(item);
          }}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Menulist;
