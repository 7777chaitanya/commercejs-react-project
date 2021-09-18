import React, {useContext, useState} from 'react';
import useStyles from "./styles";
import {CurrentUserDetailsContext} from "../../contexts/userDetails";
import AddressCard from "../AddressCard/AddressCard";
import { Typography } from '@material-ui/core';
import AddressForm from "../CheckoutForm/AddressForm";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from '../firebase';



const Addresses = () => {
    const classes = useStyles();
    const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDetailsContext);
    const [shippingData, setShippingData] = useState({});

    const handleShippingData = async (data) => {
        setShippingData({...data});
        let addresses = [...currentUserDoc.addresses];
        // console.log("userDetails in checkotu=> ", userDetails )
        if(addresses.indexOf({...data})===-1){
          addresses.push({...data})
        }
        setCurrentUserDoc(prevState =>{
          return {...prevState, addresses : addresses}
        }
        )
    
        const docSetting = await updateDoc(doc(db, "customerDetails", currentUserDoc.email), {
          
          addresses : arrayUnion({...data})
        });
        console.log("Checkout shipping data => ", data);
      }
    console.log(" addresses =>",currentUserDoc.addresses)
    if(currentUserDoc.addresses.length === 0){
        return(
            <>
            <Typography variant="h4" color="primary">You don't have any saved address. Fill the below form to save a new address!</Typography>
            <AddressForm handleShippingData={handleShippingData} />
            </>
            )
    }

    return (
       <>
       {currentUserDoc.addresses.map(eachAddress => (<AddressCard eachAddress={eachAddress}/>))}
       </>
    )
}

export default Addresses
