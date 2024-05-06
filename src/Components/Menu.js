import React from "react";

function Menu() {
  return (
    <>
      <section className="menu" id="menu">
        <div className="MenuTxt">
          <h3 className="">
            Our <span className="A">M</span>enu
          </h3>
          <hr className="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beata
          </p>
        </div>
        <div className="food-box">
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food1.jpg" />
              </div>
              <div className="food-text">
                <h3 className="food-item">chicken Biryani</h3>
                <span>₹500</span>
                <button>Add to cart</button>
              </div>
            </a>
          </div>
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food9.jpg" />
              </div>
              <div className="food-text">
                <h3 className="food-iteam">Chicken gravy</h3>
                <span>₹500</span>
                <button>Add to cart</button>
              </div>
            </a>
          </div>
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food8.jpg" />
              </div>
              <div className="food-text">
                <h3 className="food-iteam">Noodles</h3>
                <span>₹500</span>
                <button>Add to cart</button>
              </div>
            </a>
          </div>
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food4.jpg" />
              </div>
              <div className="food-text">
                <h3 className="food-iteam">Dosa</h3>
                <span>₹500</span>
                <button>Add to cart</button>
              </div>
            </a>
          </div>
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food5.jpg" />
              </div>
              <div className="textBox">
                <div className="food-text">
                  <h3 className="food-iteam">Burger</h3>

                  <span>₹500</span>
                  <button>Add to cart</button>
                </div>
              </div>
            </a>
          </div>
          <div className="food-card">
            <a className="itm" href="#">
              <div className="imgbox">
                <img className="img " src="images/food6.jpg" />
              </div>
              <div className="food-text">
                <h3 className="food-iteam">Pizza</h3>
                <span>₹500</span>
                <button>Add to cart</button>
              </div>
            </a>
          </div>
        </div>
        <div className="btn">
          <a href="Menu.html">
            <button className="View-Btn"> View More</button>
          </a>
        </div>
      </section>
      <marquee></marquee>
    </>
  );
}

export default Menu;
