import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user){
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;