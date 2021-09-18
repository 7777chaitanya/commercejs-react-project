import React, {useContext} from 'react';
import useStyles from "./styles";
import {CurrentUserDetailsContext} from "../../contexts/userDetails";
import AddressCard from "../AddressCard/AddressCard";


const Addresses = () => {
    const classes = useStyles();
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDetailsContext);
    console.log(" addresses =>",currentUserDoc.addresses)

    return (
       <>
       {currentUserDoc.addresses.map(eachAddress => (<AddressCard eachAddress={eachAddress}/>))}
       </>
    )
}

export default Addresses
