import { Stepper, Typography, Step, StepLabel, Box } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import AddressForm from "../AddressForm.jsx";
import Confirmation from "../Confirmation.jsx";
import PaymentForm from "../PaymentForm.jsx";
import useStyles from "./styles.js";
import { useAuth } from '../../../contexts/AuthContext';
import { db } from "../../firebase.js";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import {CurrentUserDetailsContext} from "../../../contexts/userDetails"



const steps = ["Shipping address", "Payment details"];

const Checkout = ({cart, emptyCart, userDetails, setUserDetails, fetchUserDetails}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const { currentUser } = useAuth();
  const [currentUserDoc, setCurrentUserDoc] = useContext(CurrentUserDetailsContext);
const [referenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    fetchUserDetails(currentUserDoc?.email);
  }, []);

  const makeid = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = 10;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   setReferenceNumber(`HWH${result}`)
   return `HWH${result}`;
}



  const handleShippingData = async (data) => {
    setShippingData({...data});
    let addresses = [...currentUserDoc.addresses];
    console.log("userDetails in checkotu=> ", userDetails )
    if(addresses.indexOf({...data})===-1){
      addresses.push({...data})
    }
    setCurrentUserDoc(prevState =>{
      return {...prevState, addresses : addresses}
    }
    )

    const docSetting = await updateDoc(doc(db, "customerDetails", currentUser.email), {
      
      addresses : arrayUnion({...data})
    });
    console.log("Checkout shipping data => ", data);
  }

  const handleActiveStep = (step) => {
    setActiveStep(step)
  }

  const Form = () => {
    return activeStep === 0 ? <AddressForm handleActiveStep={handleActiveStep}
    handleShippingData={handleShippingData} userDetails={userDetails}
    /> : <PaymentForm cart={cart} handleActiveStep={handleActiveStep} emptyCart={emptyCart} userDetails={userDetails} setUserDetails={setUserDetails} shippingData={shippingData} makeid={makeid} referenceNumber={referenceNumber}/>;
  };


  return (
    <Box  className={classes.checkoutOuterMostBox}>
      <Typography variant="h4" align="center" color="primary">
        Checkout
      </Typography>
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation userDetails={userDetails} referenceNumber={referenceNumber} /> : <Form />}
      </div>
    </Box>
  );
};

export default Checkout;
