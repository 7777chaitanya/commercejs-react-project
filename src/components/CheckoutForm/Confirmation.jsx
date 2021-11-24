import React, { useEffect }from 'react';
import useStyles from "./styles";
import DoneIcon from '@material-ui/icons/Done';
import { Button, Divider, Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import commerce from "../../lib/commerce";


const Confirmation = ({userDetails,referenceNumber}) => {

    
    const classes = useStyles();
    
    return (
        <div >
            <Typography variant="h6" align="center" className={classes.paymentSuccessful}><span>Payment successfull</span> <span><CheckCircleIcon className={classes.checkCircleIcon} /></span></Typography>
            <div style={{margin:"3%"}}></div>
            <Divider/>
            <div style={{margin:"3%"}}></div>
            <Typography variant="h6" align="center">Order Reference Number :  <Typography display="inline" variant="subtitle2"> {referenceNumber}</Typography></Typography>
            <Button variant="contained" component={Link} to="/" className={classes.backToCartButton}>Back to Home</Button>

        </div>
    )
}

export default Confirmation
