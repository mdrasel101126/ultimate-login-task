import React from "react";
import { Outlet } from "react-router-dom";
import image from "../images/istockphoto-1321277096-612x612 1.png";
import Navbar from "../Pages/Navbar/Navbar";

const Authenticate = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 md:w-4/5 lg:w-3/5 mx-auto gap-x-10">
        <div className="flex items-center justify-center">
          <img className="w-full" src={image} alt="" />
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
