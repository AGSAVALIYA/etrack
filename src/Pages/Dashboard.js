import CardComponent from "../Components/CardComponent";
import React, { useEffect } from 'react';
import Expense from "../Components/Expense";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";


const Dashboard = () => {
  const [TB, setTB] = React.useState([]);
  const db = getDatabase(app);
    const amountRef = ref(db, "TB");
  useEffect(() => {
    get(amountRef).then(res => {
        setTB(res.val());
    }
    )
}, []);
  return (
    <ThemeProvider theme={theme}>
     <div style={{marginTop:"90px"}}>
      <CardComponent>
        <Typography variant="h4" style={{color:"white"}}>
          Total Balance
        </Typography>
        <Typography variant="h4" style={{color:"white"}}>
          {TB}
        </Typography>

      </CardComponent>
      <div>
        <Expense setTB={setTB} TB={TB}/>
      </div>
     </div>
    </ThemeProvider>
  );
}



export default Dashboard;