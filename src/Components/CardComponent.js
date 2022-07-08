import React from "react"
import {Card, Typography} from "@mui/material"

const CardComponent = (props) => {
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
                }}>
                {props.children}
            </Card>
        </div>
    )
}

export default CardComponent;