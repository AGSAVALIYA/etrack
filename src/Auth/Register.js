import React, {useEffect} from 'react';

import { Card, Typography, TextField } from '@mui/material';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

 
//login form
const Register = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate("/");
        }
    }, []);


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
           <Card variant='outlined'
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
           </Card>
        </div>
    )
}

export default Register;