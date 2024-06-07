import React, { useState } from "react";
import Menulist from "./Menulist/Menulist";
import { useNavigate } from "react-router-dom";
function Menu() {
  const navigate = useNavigate();
  const goToMenuListItem = () => {
    navigate("/menuList");
  };
  const [items] = useState([
    {
      id: 0,
      ItemImg: "food1.jpg",
      ItemName: "chicken Biryani",
      price: 499,
      ratings: 4.6,
    },
    {
      id: 1,
      ItemImg: "food3.jpg",
      ItemName: "Idli",
      price: 49,
      ratings: 3,
    },
    {
      id: 2,
      ItemImg: "food4.jpg",
      ItemName: "Dosa",
      price: 49,
      ratings: 4,
    },
    {
      id: 3,
      ItemImg: "food2.jpg",
      ItemName: "Egg Rice",
      price: 149,
      ratings: 4,
    },
    {
      id: 4,
      ItemImg: "food5.jpg",
      ItemName: "Burger",
      price: 99,
      ratings: 3.5,
    },
    {
      id: 5,
      ItemImg: "food6.jpg",
      ItemName: "Pizza",
      price: 150,
      ratings: 4,
    },
    {
      id: 6,
      ItemImg: "food15.jpg",
      ItemName: "Pudding",
      price: 120,
      ratings: 4.6,
    },
    {
      id: 7,
      ItemImg: "food9.jpg",
      ItemName: "Chicken Gravy",
      price: 249,
      ratings: 5,
    },
    {
      id: 8,
      ItemImg: "food10.jpg",
      ItemName: "Mutton Gravy",
      price: 540,
      ratings: 5,
    },
  ]);
  return (
    <>
      <section className="menu" id="menu">
        <div className="MenuTxt">
          <h3 className="">
            Our <span className="A">M</span>enu
          </h3>
          <hr className="menu-line" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beata
          </p>
        </div>
        <div className="food-box">
          {items.map((item) => {
            return (
              <div className="food-card">
                <Menulist data={item} />
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button onClick={goToMenuListItem} className="View-Btn">
            View More
          </button>
        </div>
      </section>
    </>
  );
}

export default Menu;
