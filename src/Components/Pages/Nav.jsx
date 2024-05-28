import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <h3>
          FOOD<span>.</span>
        </h3>
        <nav className="navigation">
          <ul className="nav-item">
            <li className="nav-links">
              <Link to="">Home</Link>
            </li>
            <li className="nav-links">
              <a to="#about">About us</a>
            </li>

            <li className="nav-links">
              <a to="#menu">Menu</a>
            </li>
            <li className="nav-links">
              <a to="#kitchen">Experts</a>
            </li>
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
