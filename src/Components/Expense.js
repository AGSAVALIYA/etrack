import  {useEffect, useState} from "react";
import * as React from 'react';
import { Button, Card, TextField, ToggleButtonGroup } from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import app from "../firebase";
import { getDatabase, ref, set, update, get, push } from "firebase/database";


const Expense = ({setTB, TB, setExpenseOpen, setLogLoading}) => {
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
        if(category === 'D'){
            update(ref(db), {
                TB: TB - parseInt(amount),
              });
              setTB(TB - parseInt(amount));
        } else {
            update(ref(db), {
                TB: TB + parseInt(amount),
              });
              setTB(TB + parseInt(amount));
        }       

        
        set(newLog, {
            id: Date.now(),
            amount: parseInt(amount),
            category: category,
            description: description,
            date: Date.now(),
            key: newLog.key
        });
        setDescription('');
        setAmount('');   
        setExpenseOpen(false);  
        setLogLoading(true);

    }
 const handleCategory = (e, newValue) => {
    setCategory(newValue);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <Card
            variant='outlined'
            sx={{
                color: '#fff',
                backgroundColor: "#161b22",
                borderColor: "#30363d",
                maxWidth: '300px',
                padding: '10px',
                margin: '100px auto',
                borderRadius: '15px',
            }}

            >
            <TextField label="Amount" inputProps={{style:{color:"white"}}} value={amount} onChange={handelAmount} type="number" sx={{margin: "10px"}}/>
            <TextField label="Description" onChange={handleDescription} inputProps={{style:{color:"white"}}} sx={{margin: "10px"}}/>
            <ToggleButtonGroup exclusive value={category} onChange={handleCategory} sx={{margin: "10px"}}>
                <ToggleButton value="D">D</ToggleButton>
                <ToggleButton value="C">C</ToggleButton>
            </ToggleButtonGroup>
            <Button style={{padding: "10px", margin:"10px"}} onClick={addExpense} sx={{margin: "10px"}}>Calculate</Button>
            </Card>
        </div>
    );
}

export default Expense;