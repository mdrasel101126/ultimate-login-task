import React from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Navigate to="/register/login"></Navigate>
    </div>
  );
};

export default ErrorPage;
