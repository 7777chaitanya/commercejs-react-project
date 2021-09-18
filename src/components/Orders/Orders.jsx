import React, {useEffect, useContext} from 'react';
import useStyles from "./styles";
import SingleOrder from "../SingleOrder/SingleOrder";
import {CurrentUserDetailsContext} from "../../contexts/userDetails"

const Orders = ({userDetails, fetchUserDetails}) => {
    const classes = useStyles();
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDetailsContext);
    
    
    let ordersArray = [...currentUserDoc?.orders?.reverse()];
    return (
        <>
        {ordersArray.map(eachOrder => (<SingleOrder eachOrder={eachOrder} />))}
        {/* <SingleOrder/> */}
        </>
    )
}

export default Orders
