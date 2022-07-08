import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoutes from './Auth/ProtectedRoutes';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  const user = localStorage.getItem("user");
  return (
    <div className="App">
      {user ? 
      <ProtectedRoutes/>
        : <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Register/>} />
          </Routes>
      }
      

    </div>
  );
}

export default App;
