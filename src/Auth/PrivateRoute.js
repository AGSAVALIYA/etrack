import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(user){
    const email = user.user.email;
    if(email === "akshitgs0504@gmail.com"){
      return children;
    }
    else{
      localStorage.removeItem("user");
      return <Navigate to="/login" />;
    }
  }
  else{
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;