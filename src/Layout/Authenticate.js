import React from "react";
import { Outlet } from "react-router-dom";
import image from "../images/istockphoto-1321277096-612x612 1.png";
import Navbar from "../Pages/Navbar/Navbar";

const Authenticate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Navbar></Navbar>
        <img src={image} alt="" />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Authenticate;
