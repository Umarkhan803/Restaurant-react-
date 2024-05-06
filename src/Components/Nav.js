import React from "react";
const Nav = () => {
  return (
    <>
      <header>
        <h3>
          FOOD<span>.</span>
        </h3>
        <nav class="navigation">
          <ul class="nav-item">
            <li class="nav-links">
              <a href="#banner">
                <i class="fas fa-home-lg-alt"></i>Home
              </a>
            </li>
            <li class="nav-links">
              <a href="#about">
                <i class="fas fa-users-crown"></i>About us
              </a>
            </li>
            <li class="nav-links">
              <a href="#menu">
                <i class="fas fa-file-minus"></i>Menu
              </a>
            </li>
            <li class="nav-links">
              <a href="#kitchen">
                <i class="fas fa-address-card"></i>Experts
              </a>
            </li>
            <li class="nav-links">
              <a href="Cart.html">
                <i class="fas fa-shopping-cart"></i>Add to chart{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
