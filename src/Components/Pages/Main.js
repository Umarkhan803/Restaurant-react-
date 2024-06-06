import React from "react";
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
          <a to="/login" className="button">
            Log In
          </a>
          <a to="signup" className="button">
            sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
