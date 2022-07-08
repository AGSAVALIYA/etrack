import React, {useEffect, useState} from "react";
import CardComponent from "./CardComponent";
import { getDatabase,  ref, onValue, get, remove, child, update } from "firebase/database";
import { IconButton, Typography } from "@mui/material";
import app from "../firebase";
import { PacmanLoader } from "react-spinners";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Logs = ({setTB, TB, logs, setLogs, logLoading, setLogLoading}) => {
    const database = getDatabase(app);
    const logsRef = ref(database, "log");
    const amountRef = ref(database, "TB");
    const deleteLog = async (key, amount, category) => {
        await remove(child(logsRef, key));
        if(category === "C"){
            update(ref(database), {
                TB: TB - parseInt(amount),
              });
              setTB(TB - parseInt(amount));
        }else{
            update(ref(database), {
                TB: TB + parseInt(amount),
              });
              setTB(TB + parseInt(amount));       
        }
        setLogs(logs.filter(log => log.key !== key));
    }
    return (
        <div>
            {logLoading ? (
                <CardComponent>
                    <PacmanLoader color="#fff"/>
                </CardComponent>
                    ) : (
                        <div>
                            {/* map logs with uique key*/}
                            {logs.map(log => (
                                <div className="TB" key={log.id}>
                                <CardComponent>
                                    <IconButton color="primary" style={{float: "right"}} onClick={()=>{deleteLog(log.key, log.amount, log.category)}}>
                                        <DeleteForeverIcon />
                                    </IconButton>
                                    <Typography variant="h5" style={{color:"white"}}>
                                    ₹{log.amount}
                                    </Typography>
                                    <Typography variant="h6" style={{color:"white"}}>
                                        {log.description}
                                    </Typography>
                                    {log.category=="C"? <hr style={{borderColor:"green"}}/> : <hr style={{borderColor:"red"}}/>}
                                </CardComponent>
                                </div>
                            ))}

                                  
                        </div>
        ) 
        }
        </div>
    );
}

export default Logs;
