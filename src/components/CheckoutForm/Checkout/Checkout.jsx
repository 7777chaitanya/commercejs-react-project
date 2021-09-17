import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AddressForm from "../AddressForm.jsx";
import Confirmation from "../Confirmation.jsx";
import PaymentForm from "../PaymentForm.jsx";
import useStyles from "./styles.js";
import { useAuth } from '../../../contexts/AuthContext';
import { db } from "../../firebase.js";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";


const steps = ["Shipping address", "Payment details"];

const Checkout = ({cart, emptyCart, userDetails, setUserDetails, fetchUserDetails}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchUserDetails(currentUser.email);
  }, [])



  const handleShippingData = async (data) => {
    setShippingData({...data});
    let addresses = [...userDetails.addresses];
    console.log("userDetails in checkotu=> ", userDetails )
    if(userDetails.addresses.indexOf({...data})===-1){
      addresses.push({...data})
    }
    setUserDetails(prevState =>{
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
    handleShippingData={handleShippingData}
    /> : <PaymentForm cart={cart} handleActiveStep={handleActiveStep} emptyCart={emptyCart}/>;
  };

  return (
    <>
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
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </div>
    </>
  );
};

export default Checkout;
