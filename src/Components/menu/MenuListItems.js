import React, { useState } from "react";
import Menulist from "./Menulist/Menulist";

function MenuListItems(handelAddToCartClick) {
  const [items] = useState([
    {
      id: 0,
      ItemImg: "food1.jpg",
      ItemName: "chicken Biryani",
      price: 499,
    },
    {
      id: 1,
      ItemImg: "food3.jpg",
      ItemName: "Idli",
      price: 49,
    },
    {
      id: 2,
      ItemImg: "food4.jpg",
      ItemName: "Dosa",
      price: 49,
    },
    {
      id: 3,
      ItemImg: "food2.jpg",
      ItemName: "Egg Rice",
      price: 149,
    },
    {
      id: 4,
      ItemImg: "food5.jpg",
      ItemName: "Burger",
      price: 99,
    },
    {
      id: 5,
      ItemImg: "food6.jpg",
      ItemName: "Pizza",
      price: 150,
    },
    {
      id: 6,
      ItemImg: "food15.jpg",
      ItemName: "Pudding",
      price: 120,
    },
    {
      id: 7,
      ItemImg: "food9.jpg",
      ItemName: "Chicken Gravy",
      price: 249,
    },
    {
      id: 8,
      ItemImg: "food10.jpg",
      ItemName: "Mutton Gravy",
      price: 540,
    },
    {
      id: 9,
      ItemImg: "food11.jpg",
      ItemName: "Chicken Tadoor",
      price: 250,
    },
    {
      id: 10,
      ItemImg: "food12.jpg",
      ItemName: "Fish Fry",
      price: 350,
    },
    {
      id: 11,
      ItemImg: "food13.jpg",
      ItemName: "Gulab Jaamun",
      price: 99,
    },
    {
      id: 12,
      ItemImg: "food14.jpg",
      ItemName: "Rass malai",
      price: 99,
    },
    {
      id: 13,
      ItemImg: "food16.jpg",
      ItemName: "White Chocolate ",
      price: 149,
    },
    {
      id: 14,
      ItemImg: "food17.jpg",
      ItemName: "Chocolate Cake",
      price: 149,
    },
  ]);
  return (
    <>
      <section className="menu" id="menu">
        <div className="MenuTxt">
          <h3 className="">
            Our <span className="A">M</span>enu
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beata
          </p>
        </div>
        <div className="food-box">
          {items.map((item) => {
            return (
              <div className="food-card">
                <Menulist
                  key={item}
                  item={item}
                  handelAddToCartClick={handelAddToCartClick}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MenuListItems;
