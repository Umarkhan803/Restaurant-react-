import React, { useState } from "react";
import Menulist from "./Menulist/Menulist";
function Menu() {
  const [items, setItems] = useState([
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
      id: 1,
      ItemImg: "food4.jpg",
      ItemName: "Dosa",
      price: 49,
    },
    {
      id: 1,
      ItemImg: "food2.jpg",
      ItemName: "Egg Rice",
      price: 149,
    },
    {
      id: 1,
      ItemImg: "food5.jpg",
      ItemName: "Burger",
      price: 99,
    },
    {
      id: 1,
      ItemImg: "food6.jpg",
      ItemName: "Pizza",
      price: 150,
    },
    {
      id: 1,
      ItemImg: "food15.jpg",
      ItemName: "Pudding",
      price: 120,
    },
    {
      id: 1,
      ItemImg: "food9.jpg",
      ItemName: "Chicken Gravy",
      price: 249,
    },
    {
      id: 1,
      ItemImg: "food10.jpg",
      ItemName: "Mutton Gravy",
      price: 540,
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
          <a href="Menu.html">
            <button className="View-Btn"> View More</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Menu;
