import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    let result = await fetch("http://localhost:3500/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };
  return (
    <div>
      <>
        <div className="login-container">
          <div className="Main">
            <h2>Sign Up</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autocomplete="off"
                name=""
                id="username"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autocomplete="off"
                name=""
                id="username"
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="off"
                name=""
                id="password"
              />
            </div>

            <input
              type="submit"
              onClick={collectData}
              className="Submit-Btn"
              value="Sign up"
            />
            <div className="register"></div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SignUp;
