import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import Review from "./Review/Review";
import useStyles from "./styles";
import {
  CardElement,
  Elements,
  ElementsConsumer,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import commerce from '../../lib/commerce';
import Progress from "../Progress/Progress";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);



const PaymentForm = ({ cart, handleActiveStep, emptyCart }) => {
  const classes = useStyles();
  const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        
    
        if (!stripe || !elements) {
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }

        handleActiveStep(2);
        emptyCart();
        



  };

  const handleProgressSubmit = () => {
    handleActiveStep(2);
        emptyCart();
        
  }

  const calculateTotal = () => {
    let total = 0;
    cart.map((item) => (total = total + item.price.raw * item.quantity));
    return total;
  };

  return (
    <>
      <Review cart={cart} />
      <Divider />
      <Typography
        variant="h5"
        color="primary"
        align="center"
        style={{ margin: "20px 0" }}
      >
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer >
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)} className={classes.cardElement}>
              <div >
                <CardElement />
              </div>

              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary" onClick={() => handleActiveStep(0)}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!stripe}
                  color="primary"
                >
                  {`Pay ₹ ${calculateTotal()}`}{" "}
                </Button>
                <Progress buttonContent={`Pay ₹ ${calculateTotal()}`} handleProgressSubmit={handleProgressSubmit}/>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
