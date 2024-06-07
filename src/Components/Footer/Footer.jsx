import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="row1">
          <div class="comp">
            <h3>Company</h3>
            <label>About </label>
            <label>Jobs</label>
            <label>For the Record</label>
          </div>
          <div class="comm">
            <h3>Communities</h3>
            <label for="">For Artist</label>
            <label>Developers</label>
            <label for="">Advertising</label>
            <label for="">Investors</label>
            <label for="">Vendors</label>
          </div>
          <div class="use">
            <h3>Useful link</h3>
            <label for="">Support</label>
            <label for="">Free Mobile App</label>
          </div>
        </div>
        <div class="logo">
          <i class="fa-brands fa-instagram"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </footer>
    </>
  );
}

export default Footer;
