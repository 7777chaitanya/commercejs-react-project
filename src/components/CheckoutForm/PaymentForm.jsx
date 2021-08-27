import React from 'react';
import Review from './Review/Review';
import useStyles from "./styles";


const PaymentForm = ({cart}) => {
    return (
        <>
            <Review cart={cart}/>
        </>
    )
}

export default PaymentForm
