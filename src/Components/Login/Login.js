import React from "react";

function Login() {
  return (
    <>
      <form
        className="Main"
        action="index.html"
        method="post"
        onsubmit=" return valid()">
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
          <a href="#">Register </a>
        </div>
      </form>
    </>
  );
}

export default Login;
