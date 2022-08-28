import React, {useEffect} from 'react';

import { Card, Typography, TextField } from '@mui/material';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

 
//login form
const Register = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message , setMessage] = React.useState('');
    const [admin, setAdmin] = React.useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.user.email;
    useEffect(() => {
        if(email !== "akshitgs0504@gmail.com"){
        setMessage("You are not authorized to register :/");
        setTimeout(() => {
            navigate("/");
        } , 3000);
        }else{
            setAdmin(true);
        }
    } , [email, message, navigate]);



//navigate to dashboard after 5 sec
    

const onChangeUsername = (e) => {
        setUsername(e.target.value);
}
const onChangePassword = (e) => {
    setPassword(e.target.value);
}
const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, username , password)
    .then(res => {
        console.log(res);
        navigate('/login');
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}





    return (
        <div style={{
            margin: "auto",
            marginTop: "300px",
        }}>
           {(admin==true) ? (<Card variant='outlined'
                sx={{
                    color: '#fff',
                    width: '300px',
                    padding: "30px",
                    margin: "auto",
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
                    }} onClick={onSubmit}>Register</button>
           </Card> ): <h1 style={{color: "white", textAlign: "center"}}>{message}</h1>
           }
        </div>
    )
}

export default Register;