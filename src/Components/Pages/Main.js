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
          <Link to="/login" className="button">
            Log In
          </Link>
          <Link to="signup" className="button">
            sign up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
