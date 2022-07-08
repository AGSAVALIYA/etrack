import  {useEffect, useState} from "react";
import * as React from 'react';
import { Button, Card, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";


const Expense = ({setTB, TB}) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = React.useState('D');
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

    
//add expense to TB in firebase
    const addExpense = (e) => {
        e.preventDefault();
        update(ref(db), {
            TB: TB + parseInt(amount),
          });
    }

    
      const handleCategory = (event, newCategory) => {
        setCategory(newCategory);
      };
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
            <TextField label="Description" inputProps={{style:{color:"white"}}}/>
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