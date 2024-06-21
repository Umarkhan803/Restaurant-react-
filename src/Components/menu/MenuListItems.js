import React, { useState } from "react";
import Menulist from "./Menulist/Menulist";

function MenuListItems({ handelClick }) {
  const [items] = useState([
    {
      id: 0,
      ItemImg: "food1.jpg",
      ItemName: "chicken Biryani",
      price: 499,
      ratings: 4.6,
      amount: 1,
    },
    {
      id: 1,
      ItemImg: "food3.jpg",
      ItemName: "Idli",
      price: 49,
      ratings: 3,
      amount: 1,
    },
    {
      id: 2,
      ItemImg: "food4.jpg",
      ItemName: "Dosa",
      price: 49,
      ratings: 4,
      amount: 1,
    },
    {
      id: 3,
      ItemImg: "food2.jpg",
      ItemName: "Egg Rice",
      price: 149,
      ratings: 4,
      amount: 1,
    },
    {
      id: 4,
      ItemImg: "food5.jpg",
      ItemName: "Burger",
      price: 99,
      ratings: 3.5,
      amount: 1,
    },
    {
      id: 5,
      ItemImg: "food6.jpg",
      ItemName: "Pizza",
      price: 150,
      ratings: 4,
      amount: 1,
    },
    {
      id: 6,
      ItemImg: "food15.jpg",
      ItemName: "Pudding",
      price: 120,
      ratings: 4.6,
      amount: 1,
    },
    {
      id: 7,
      ItemImg: "food9.jpg",
      ItemName: "Chicken Gravy",
      price: 249,
      ratings: 5,
      amount: 1,
    },
    {
      id: 8,
      ItemImg: "food10.jpg",
      ItemName: "Mutton Gravy",
      price: 540,
      ratings: 5,
      amount: 1,
    },
    {
      id: 9,
      ItemImg: "food11.jpg",
      ItemName: "Chicken Tadoor",
      price: 250,
      ratings: 5,
      amount: 1,
    },
    {
      id: 10,
      ItemImg: "food12.jpg",
      ItemName: "Fish Fry",
      price: 350,
      ratings: 4,
      amount: 1,
    },
    {
      id: 11,
      ItemImg: "food13.jpg",
      ItemName: "Gulab Jaamun",
      price: 99,
      ratings: 4.5,
      amount: 1,
    },
    {
      id: 12,
      ItemImg: "food14.jpg",
      ItemName: "Rass malai",
      price: 99,
      ratings: 4.9,
      amount: 1,
    },
    {
      id: 13,
      ItemImg: "food16.jpg",
      ItemName: "White Chocolate ",
      price: 149,
      ratings: 5,
      amount: 1,
    },
    {
      id: 14,
      ItemImg: "food17.jpg",
      ItemName: "Chocolate Cake",
      price: 149,
      ratings: 5,
      amount: 1,
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
                <Menulist key={item} handelClick={handelClick} item={item} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MenuListItems;
