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
          <div className="chef">
            <div className="imgbox2">
              <img className="img image1" src="images/chef1.jpg" />
            </div>
            <span className="food-iteam">Chef 1</span>
          </div>
          <div className="chef">
            <div className="imgbox2">
              <img className="img image1" src="images/chef2.jpg" />
            </div>
            <span className="food-iteam">Chef 2</span>
          </div>

          <div className="chef">
            <div className="imgbox2">
              <img className="img image1" src="images/chef.jpg" />
            </div>
            <span className="food-iteam">Chef 3</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expert;
