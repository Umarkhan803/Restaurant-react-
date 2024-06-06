import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <h3>
          <a href="/">FOOD</a>
          <span>.</span>
          <span></span>
        </h3>

        <nav className="navigation">
          <ul className="nav-item">
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <li className="nav-links">
              <Link to="">Home</Link>
            </li>
            <span class="material-symbols-outlined">article</span>
            <li className="nav-links">
              <a href="#about">About us</a>
            </li>
            <span class="material-symbols-outlined">restaurant_menu</span>
            <li className="nav-links">
              <a href="#menu">Menu</a>
            </li>
            <span class="material-symbols-outlined">groups</span>
            <li className="nav-links">
              <a href="#kitchen">Experts</a>
            </li>
            <span class="material-symbols-outlined">shopping_bag</span>
            <li className="nav-links">
              <Link to="/add">Add to chart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
