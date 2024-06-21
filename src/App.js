import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Pages/Nav";
import Cart from "./Components/Cart/Cart";
import Index from "./Components/Layout/Index";
import MenuListItems from "./Components/menu/MenuListItems";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/Signup/SignUp.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handelClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <>
      <BrowserRouter>
        <Nav size={cart.length} />
        <Routes>
          <Route path="" element={<Index handelClick={handelClick} />} />
          <Route
            path="add"
            element={
              <Cart
                size={cart.length}
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="menuList"
            element={<MenuListItems handelClick={handelClick} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
