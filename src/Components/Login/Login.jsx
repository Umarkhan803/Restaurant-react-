import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    let result = await fetch("http://localhost:3500/login", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("userlogin", JSON.stringify(result.user));
      localStorage.setItem("tokenLogin", JSON.stringify(result.auth));
      alert("your log in successfully");
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="Main">
          <h2>Log in</h2>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name=""
              id="password"
            />
            <img src="images/pass.png" alt="" />
          </div>

          <input
            onClick={handleLogin}
            type="submit"
            className="Submit-Btn"
            value="Log in"
          />
          <div className="register">
            <label for=""> Don't have an account? </label>
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
