import { useState } from "react";
import React from "react";
import ExpertList from "./ExpertList/ExpertList";
function Expert() {
  const [items, setItem] = useState([
    {
      id: 1,
      chefName: " Chef 1",
      chefImg: "chef1.jpg",
      chefInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitBlanditiis eveniet Quas",
    },
    {
      id: 1,
      chefName: " Chef 2",
      chefImg: "chef2.jpg",
      chefInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitBlanditiis eveniet Quas",
    },
    {
      id: 1,
      chefName: " Chef 3",
      chefImg: "chef.jpg",
      chefInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitBlanditiis eveniet Quas",
    },
  ]);
  return (
    <>
      <section className="expert" id="kitchen">
        <div className="MenuTxt">
          <h3 className="">
            Our Kitchen <span className="A">E</span>xpert
          </h3>
          <hr className="expert-line" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beata
          </p>
        </div>
        <div className="chef-box">
          {items.map((item) => {
            return <ExpertList data={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Expert;
