import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import AddressForm from "../AddressForm.jsx";
import Confirmation from "../Confirmation.jsx";
import PaymentForm from "../PaymentForm.jsx";
import useStyles from "./styles.js";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => {
    return activeStep === 0 ? <AddressForm /> : <PaymentForm />;
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