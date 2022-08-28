import React from 'react';
import { Card, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
//login form
const Login = () => {
 const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');
const navigate = useNavigate();  
 const auth = getAuth();
const onChangeUsername = (e) => {
        setUsername(e.target.value);
}
const onChangePassword = (e) => {
    setPassword(e.target.value);
}

//sign in user with email and password with firebase auth and save to local storage
const onSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then(res => {
        toast.success("Logged in successfully");
        localStorage.setItem('user', JSON.stringify(res));
        navigate('/');
    }
    )
    .catch(err => {
        toast.error("Invalid Credentials");
        console.log(err);
    }
    )
}
const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
    if(user){
            navigate("/");
    }
}
, []);
const config = {
    rps: 100,
}




    return (
        <div>
           <ParticlesBg type="polygon" bg={true} config={config}/>
           <Card variant='outlined'
           className='login-card'
                sx={{
                    color: '#fff',
                    width: '300px',
                    padding: "30px",
                    margin: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    marginTop: "15px",
                    backgroundColor: "#161b22",
                    borderColor: "#30363d",
                    borderRadius: "10px",
                }}>
                    <form onSubmit={onSubmit}>
                    <TextField variant='outlined'
                        label='Username'
                        value={username}
                        autoComplete='off'
                        onChange={onChangeUsername}
                        className="login-input"
                        sx={{
                            width: '100%',
                            marginBottom: "10px",
                            borderColor: "#30363d",
                            borderRadius: "10px",
                            color: "#fff",
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#fff",
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            }
                        }}

                    />
                    <TextField variant='outlined'
                        label='Password'
                        value={password}
                        autoComplete='off'
                        type={'password'}
                        onChange={onChangePassword}
                        className="login-input"
                        sx={{
                            width: '100%',
                            marginBottom: "10px",
                            color: "#fff",
                            borderColor: "#30363d",
                            borderRadius: "10px",
                        }}
                        InputLabelProps={{
                            style: {
                                color: "#fff",
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            }
                        }}
                    />
                    <button style={{
                        backgroundColor: "#238636",
                        color: "#fff",
                        border: "0",
                        borderRadius: "10px",
                        padding: "10px",
                        fontSize: "15px"
                    }} >Login</button>
                   </form> 
           </Card>
           <ToastContainer />
        </div>
    )
}

export default Login;