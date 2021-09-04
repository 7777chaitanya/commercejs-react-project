import React, {useEffect} from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./styles.css";
import CartItem from "./CartItem/CartItem";
import Review from "../CheckoutForm/Review/Review";
import {useAuth} from "../../contexts/AuthContext";

const Cart = ({
  cart,
  incrementItem,
  decrementItem,
  removeItem,
  emptyCart,
  fetchUserDetails
}) => {
  const {currentUser} = useAuth();
  const Loading = () => {
    return <Typography variant="h5">Loading Your Cart....</Typography>;
  };

  const EmptyCart = () => {
    return (
      <Typography variant="body1">
        Your cart has no items. <Link to="/">Go back to products page </Link>to
        add more products.
      </Typography>
    );
  };

  useEffect(() => {
    fetchUserDetails(currentUser.email);
  }, []);

  const LoadedCart = () => {
    return (
      <>
        {/* <Review cart={cart} disabled /> */}
        <Grid container>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <CartItem
                cart={cart}
                item={item}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                removeItem={removeItem}
              />
            </Grid>
          ))}
        </Grid>
        <Divider/>
        <div style={{margin: "2%"}}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="h6" display="inline">
              Subtotal : {cart.subtotal.formatted_with_symbol}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => emptyCart()}
                >
                  EMPTY CART
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  color="secondary"
                >
                  CHECKOUT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
      </>
    );
  };

  const whichCart = () => {
    return cart.line_items.length === 0 ? <EmptyCart /> : <LoadedCart />;
  };

  return (
    <>
      <Typography variant="h4" color="primary" align="center">
        Your Shopping Cart
      </Typography>

      {cart.line_items === undefined ? <Loading /> : whichCart()}
      {/* {cart.line_items.length===0 ? <EmptyCart/> : <LoadedCart/>} */}
    </>
  );
};

export default Cart;
