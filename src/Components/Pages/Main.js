import React from "react";
import { Link } from "react-router-dom";
function Main() {
  return (
    <>
      <div className="main" id="banner">
        <h1 className="head">Always Choose Good... </h1>
        <p className="txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porr o hic
          quis error pariatur doloribus ab eos
        </p>
        <div>
          <button className="button">
            <Link to="/login">Log In</Link>
          </button>
          <button className="button">
            <Link to="/signup">sign up</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
