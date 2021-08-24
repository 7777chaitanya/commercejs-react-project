import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./styles.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const Loading = () => {
    return <Typography variant="h5">Loading Your Cart....</Typography>;
  };

  const LoadedCart = () => {
    return (
      <>
        <Grid container>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <CartItem cart={cart} item={item} />
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="h6" display="inline">
              Subtotal : {cart.subtotal.formatted_with_symbol}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button variant="contained" color="primary">
                  EMPTY CART
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  CHECKOUT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Typography variant="h4" color="textPrimary">
        Your Shopping Cart
      </Typography>

      {cart.line_items === undefined ? <Loading /> : <LoadedCart />}
    </>
  );
};

export default Cart;
