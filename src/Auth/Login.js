import React from 'react';
import { Card, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import ParticlesBg from 'particles-bg'

 
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
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
        navigate('/');
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}
const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
    if(user){
        const email = user.user.email;
        if(email === "akshitgs0504@gmail.com"){
            navigate("/");
        }
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

                    <TextField variant='outlined'
                        label='Username'
                        value={username}
                        onChange={onChangeUsername}
                        sx={{
                            width: '100%',
                            marginBottom: "10px",
                            backgroundColor: "#0d1117",
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
                        onChange={onChangePassword}
                        sx={{
                            width: '100%',
                            marginBottom: "10px",
                            backgroundColor: "#0d1117",
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
                    }} onClick={onSubmit}>Login</button>
           </Card>
        </div>
    )
}

export default Login;