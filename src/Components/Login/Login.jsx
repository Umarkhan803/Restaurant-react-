import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="login-container">
        <form className="Main" method="post">
          <h2>Log in</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="User Name"
              autocomplete="off"
              name=""
              id="username"
            />
            <img src="images/user.png" className="user" alt="" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              autocomplete="off"
              name=""
              id="password"
            />
            <img src="images/pass.png" alt="" />
          </div>
          <label for="" className="Rem-box">
            <input type="checkbox" name="" id="" /> Remember Me
          </label>
          <input type="submit" className="Submit-Btn" value="Log in" />
          <div className="register">
            <label for=""> Don't have an account? </label>
            <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
