import React, { Fragment } from "react";
import Separator from "../common/Separator";
import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="container-fluid justify-content-between justify-content-md-around d-flex mt-4 ">
        <Logo />
        <Navbar />
      </div>
      <Separator />
    </>
  );
};

export default Header;
