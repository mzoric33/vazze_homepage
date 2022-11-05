import React from "react";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={classes.header__content}>
      <nav className={classes.header__content__nav}>
        <h2 className={classes.header__content__logo}>VAZZE</h2>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#omeni">ABOUT</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
