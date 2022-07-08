import CardComponent from "../Components/CardComponent";
import React, { useEffect } from 'react';
import Expense from "../Components/Expense";
import { Button, ThemeProvider, Typography, Dialog, IconButton } from "@mui/material";
import theme from "../theme";
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";
import Logs from "../Components/Logs";
import Navbar from "../Components/Navbar";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Dashboard = () => {
  const [TB, setTB] = React.useState([]);
  const [expenseOpen, setExpenseOpen] = React.useState(false);
  const [logs, setLogs] = React.useState();
  const [logLoading, setLogLoading] = React.useState(true);

  const db = getDatabase(app);
    const amountRef = ref(db, "TB");
  useEffect(() => {
    get(amountRef).then(res => {
        setTB(res.val());
    }
    )
    get(ref(db, "log")).then(res => {
        const logsArray = Object.values(res.val());
        const logsArrayNewToOld = logsArray.reverse();
        setLogs(logsArrayNewToOld);
        setLogLoading(false);
    }
    )
    
}, []);
if(logLoading){
  get(ref(db, "log")).then(res => {
    const logsArray = Object.values(res.val());
    const logsArrayNewToOld = logsArray.reverse();
    setLogs(logsArrayNewToOld);
    setLogLoading(false);
}
)
}

  return (
    <ThemeProvider theme={theme}>
     <div style={{marginTop:"90px"}}>
      <Navbar/>
      <div className="TB mainBox" style={{zIndex: "1"}}>
      <CardComponent>
        <Typography variant="h4" style={{color:"white"}}>
          Total Balance
        </Typography>
        <Typography variant="h4" style={{color:"white"}}>
        ₹{TB}
        </Typography>
      </CardComponent>
      </div>
      <div style={{textAlign: "center", paddingTop: "15px"}} className="TB">
      <Typography variant="h4" style={{color:"white"}}>
        Expenses
      </Typography>
      </div>
      <div style={{marginTop: "25px"}}>
      <Logs setTB={setTB} TB={TB} logLoading={logLoading} setLogLoading={setLogLoading} logs={logs} setLogs={setLogs}/>
      </div>
      <div className="expense">
        <IconButton color="primary" onClick={()=>setExpenseOpen(true)}><AddCircleIcon style={{fontSize: "50px"}}/></IconButton>
      </div>
      <Dialog open={expenseOpen} onClose={() => setExpenseOpen(false)} PaperProps={{style:{backgroundColor: "transparent", boxShadow: "none"}}}>
        <Expense setExpenseOpen={setExpenseOpen} TB={TB} setTB={setTB} setLogLoading={setLogLoading}/>
      </Dialog>
     </div>
    </ThemeProvider>
  );
}



export default Dashboard;