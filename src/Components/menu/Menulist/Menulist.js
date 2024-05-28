import React from "react";

const Menulist = ({ data }) => {
  return (
    <>
      <div className="img-box">
        <img className="img " src={`images/${data.ItemImg}`} alt="food" />
      </div>
      <div className="food-text">
        <h3 className="food-item">{data.ItemName}</h3>
        <span>&#8377;{data.price}</span>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default Menulist;
