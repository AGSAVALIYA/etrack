import  {useEffect, useState} from "react";
import * as React from 'react';
import { Button, Card, TextField, ToggleButtonGroup } from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import app from "../firebase";
import { getDatabase, ref, set, update, get, push } from "firebase/database";


const Expense = ({setTB, TB}) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = React.useState('D');
    const [description, setDescription] = React.useState('');

  

    const handelAmount = (e) => {
        setAmount(e.target.value);
    }
    const db = getDatabase(app);
    const amountRef = ref(db, "TB");
    useEffect(() => {
        get(amountRef).then(res => {
            setTB(res.val());
        }
        )
    }, []);

    const ToggleButton = styled(MuiToggleButton)({
        color: '#fff',
        borderColor: '#fff',
        "&.Mui-selected, &.Mui-selected:hover": {
          color: "black",
          fontWeight: "bold",
          backgroundColor: '#fff'
        }
      });  
    const expenseLog = ref(db, "log");
    const newLog = push(expenseLog);
    const addExpense = (e) => {
        e.preventDefault();
        update(ref(db), {
            TB: TB + parseInt(amount),
          });
        setTB(TB + parseInt(amount));
        set(newLog, {
            amount: parseInt(amount),
            category: category,
            description: description,
            timestamp: Date.now()
        });

        setAmount('');     
    }
 const handleCategory = (e, newValue) => {
    setCategory(newValue);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
        console.log(description);
    }


    
    return (
        <div>
            <Card
            variant='outlined'
            sx={{
                color: '#fff',
                width: '75%',
                padding: "30px",
                margin: "auto",
                marginTop: "15px",
                backgroundColor: "#161b22",
                borderColor: "#30363d",
                borderRadius: "10px",
            }}
            >
            <TextField label="Amount" inputProps={{style:{color:"white"}}} value={amount} onChange={handelAmount} type="number"/>
            <TextField label="Description" onChange={handleDescription} inputProps={{style:{color:"white"}}}/>
            <ToggleButtonGroup exclusive value={category} onChange={handleCategory}>
                <ToggleButton value="D">D</ToggleButton>
                <ToggleButton value="C">C</ToggleButton>
            </ToggleButtonGroup>
            <Button style={{padding: "10px", margin:"10px"}} onClick={addExpense}>Add Expense</Button>
            </Card>
        </div>
    );
}

export default Expense;