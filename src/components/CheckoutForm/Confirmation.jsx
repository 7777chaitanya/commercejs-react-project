import React, { useEffect }from 'react';
import useStyles from "./styles";
import DoneIcon from '@material-ui/icons/Done';
import { Button, Divider, Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
// import commerce from "../../lib/commerce";

const Confirmation = () => {
    
    return (
        <div >
            <Typography variant="h6" align="center">Payment successfull <DoneIcon color="green"/></Typography>
            <div style={{margin:"3%"}}></div>
            <Divider/>
            <div style={{margin:"3%"}}></div>
            <Typography variant="h6" align="center">Order Reference Number :  <Typography display="inline" variant="subtitle2"> HWH8569634788589</Typography></Typography>
            <Button variant="contained" component={Link} to="/">Back to Home</Button>

        </div>
    )
}

export default Confirmation
