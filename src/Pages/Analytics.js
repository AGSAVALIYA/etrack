import React, {useEffect} from "react";
import CardComponent from "../Components/CardComponent";
import {Typography} from "@mui/material";
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import './analytics.css';
import app from "../firebase";
import { getDatabase, ref, set, update, get } from "firebase/database";
import "./analytics.css";
const Analytics = () => {
    const database = getDatabase(app);
    const logRef = ref(database, "log");
    const [logs, setLogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        get(logRef).then(res => {
            setLogs(res.val());
        }
        )
    }, []);

    if(loading){
        get(logRef).then(res => {
            setLogs(res.val());
            setLoading(false);
        }
        )
    }
   //make a new array with the keys of the logs object
    const logsArray = Object.keys(logs);
   //filter the logs array to only include the logs that are of type expense

   const debitArray = logsArray.filter(log => {
         return logs[log].category === "D";
    }
    );
    const creditArray = logsArray.filter(log => {
        return logs[log].category === "C";
    }
    );
    const DData = debitArray.map(log => {
        return {x: logs[log].date, y: logs[log].amount};
    }
    );
    const CData = creditArray.map(log => {
        return {x: logs[log].date, y: logs[log].amount};
    }
    );
    
   
   
        
    
    //filter the logs array to only include the logs that are of type credit




    

    return(
        <div style={{marginTop: "100px"}}>
            <CardComponent>
                <Typography variant="h4" style={{color:"white"}}>
                    Analytics
                </Typography>
            </CardComponent>
            <CardComponent>
            {loading ? <Typography variant="h4" style={{color:"white"}}>
                Loading...
            </Typography> :
            <XYPlot height={300} width={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <LineSeries data={CData} color="#00ff00"/>
            <LineSeries data={DData} color="#ff0000"/>
        </XYPlot>}
            </CardComponent>
        </div>
    )
}

export default Analytics;
