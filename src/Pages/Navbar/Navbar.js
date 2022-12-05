import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ultimate hrm logo-05-02 4.png";

const Navbar = () => {
  return (
    <div className="p-4">
      <Link to="/">
        {" "}
        <img className="" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
