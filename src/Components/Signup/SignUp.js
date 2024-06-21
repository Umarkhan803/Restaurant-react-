import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div>
      <>
        <div className="login-container">
          <form className="Main" method="post">
            <h2>Sign Up</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="User Name"
                autocomplete="off"
                name=""
                id="username"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Number"
                autocomplete="off"
                name=""
                id="username"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                autocomplete="off"
                name=""
                id="password"
              />
            </div>
            <label for="" className="Rem-box">
              <input type="checkbox" name="" id="" /> Remember Me
            </label>
            <input type="submit" className="Submit-Btn" value="Log in" />
            <div className="register"></div>
          </form>
        </div>
      </>
    </div>
  );
}

export default SignUp;
