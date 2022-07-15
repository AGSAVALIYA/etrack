import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";


const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
 
  if(user){
    const email = user.user.email;
    if(email === "akshitgs0504@gmail.com"){
      return children;
    }
  }
  else{
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;