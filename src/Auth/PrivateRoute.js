import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";
import { useEffect } from "react";


const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect (() => {
    if(user){
      const email = user.user.email;
      if(email === "akshitgs0504@gmail.com"){
        return children;
      }
      else{
        localStorage.removeItem("user");
        navigate("/login");
      }
    }
    else{
      navigate("/login");
    }
  }
  , []);
}

export default PrivateRoute;