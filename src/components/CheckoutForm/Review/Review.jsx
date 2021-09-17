import {
  Grid,
  ListItem,
  Typography,
  List,
  ListItemText,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import commerce from "../../../lib/commerce.js";

const Review = ({ cart }) => {
  const calculateTotal = () => {
    let total = 0;
    cart.map((item) => (total = total + item.price.raw * item.quantity));
    return total;
  };

  console.log("cart review =>", cart);

  return (
    <div>
      <Typography variant="h5" color="primary" align="center">
        Order Summary
      </Typography>
      <List>
        {cart?.map((cartItem) => (
          <ListItem key={cartItem.id}>
            <ListItemText
              primary={cartItem.name}
              secondary={`Qty: ${cartItem.quantity}`}
            />
            {/* <ListItemText>{cartItem.quantity}</ListItemText> */}
            <Typography variant="body2">{`₹ ${
              cartItem.price.raw * 2
            }`}</Typography>
            {/* <ListItemText>{`₹ ${cartItem.price.raw*2}`}</ListItemText> */}
          </ListItem>
        ))}
      

      <ListItem>
        <ListItemText>
          <Typography variant="h6" color="primary">
            OrderTotal :
          </Typography>
        </ListItemText>

        <Typography variant="h6" align="center" color="primary">
          {`₹ ${calculateTotal()}`}
        </Typography>
      </ListItem>
      </List>

      <Divider />
    </div>
  );
};

export default Review;
