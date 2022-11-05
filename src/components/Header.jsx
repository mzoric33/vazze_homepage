import React from "react";
import classes from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={classes.header}>
      <Nav />
    </div>
  );
};

export default Header;
