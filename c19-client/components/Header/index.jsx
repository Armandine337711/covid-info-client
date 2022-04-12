import React, { Fragment } from "react";
import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container-fluid justify-content-between justify-content-md-around d-flex my-4 mx-auto">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
