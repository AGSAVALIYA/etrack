import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useEffect, useState } from 'react';
import PrivateRoute from './Auth/PrivateRoute';
import Analytics from './Pages/Analytics';

function App() {

  
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
      <Route path="/analytics" element={<PrivateRoute><Analytics/></PrivateRoute>}/>

    </Routes>
    </div>
  );
}

export default App;
