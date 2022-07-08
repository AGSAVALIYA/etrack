import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Navbar from "../Components/Navbar";


const ProtectedRoute = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default ProtectedRoute;