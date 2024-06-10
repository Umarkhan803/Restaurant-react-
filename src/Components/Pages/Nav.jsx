import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ size }) => {
  return (
    <>
      <header>
        <h3>
          <a className="logo1" href="/">
            FOOD
          </a>
        </h3>
        <span className="dot">.</span>

        <nav className="navigation">
          <ul className="nav-item">
            <li className="nav-links">
              <i class="fa-solid fa-house"></i>
              <Link to="">Home</Link>
            </li>
            <i class="fa-solid fa-address-card"></i>
            <li className="nav-links">
              <a href="#about">About us</a>
            </li>
            <i class="fa-solid fa-list"></i>
            <li className="nav-links">
              <a href="#menu">Menu</a>
            </li>
            <i class="fa-solid fa-user-group"></i>
            <li className="nav-links">
              <a href="#kitchen">Experts</a>
            </li>
            <i class="fa-solid fa-cart-shopping"></i>
            <li className="nav-links">
              <Link to="/add">Add to chart</Link>
              {size > 0 ? <span className="cartCount">{size}</span> : " "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
