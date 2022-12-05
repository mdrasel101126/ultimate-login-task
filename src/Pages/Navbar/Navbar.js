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
      <Link to="/register">Authenticate</Link>
      <Link to="/register/login">Login</Link>
      <Link to="/register/signup">SignUp</Link>
    </div>
  );
};

export default Navbar;
