import React from "react";

function Expert() {
  return (
    <>
      <section className="expert" id="kitchen">
        <div className="MenuTxt">
          <h3 className="">
            Our Kitchen <span className="A">E</span>xpert
          </h3>
          <hr className="usline" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beata
          </p>
        </div>
        <div className="chef-box">
          <div className="chef-card">
            <img className="img image1" alt="chef 1" src="images/chef1.jpg" />
            <div className="card-info">
              <h4>Chef 1</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eveniet! Quas illum beatae nesciunt,
              </p>
            </div>
            <span className="food-item">Chef 1</span>
          </div>
          <div className="chef-card">
            <img className="img image1" alt="chef 2" src="images/chef2.jpg" />
            <div className="card-info">
              <h4>Chef 2</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eveniet! Quas illum beatae nesciunt,
              </p>
            </div>
            <span className="food-item">Chef 2</span>
          </div>

          <div className="chef-card">
            <img className="img image1" alt="chef 3" src="images/chef.jpg" />
            <div className="card-info">
              <h4>Chef 3</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eveniet! Quas illum beatae nesciunt,
              </p>
            </div>
            <span className="food-item">Chef 3</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expert;
