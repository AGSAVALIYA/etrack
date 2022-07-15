import React from "react";
import "./Navbar.css"; 
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useNavigate } from "react-router-dom";

//Navbar component

const Navbar = () => {
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("user");
        return navigate("/login");
    }
    return (
        <div className="navbar">
         Expense Tracker
                <ExitToAppIcon onClick={Logout} style={{backgoroundColor: "#fff", fontSize: "30", position: "fixed", right: "10px"}}/>

        </div>
    );
    }

    export default Navbar;