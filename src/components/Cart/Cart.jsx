import React, {useEffect} from "react";
import { Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { Paper, Box } from "@material-ui/core";

import { Link } from "react-router-dom";

import "./styles.css";
import CartItem from "./CartItem/CartItem";
import Review from "../CheckoutForm/Review/Review";
import {useAuth} from "../../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
  wishlistPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection :"column",
    [theme.breakpoints.down('sm')]: {
      width : "100vw",
      height : "60vh",
    paddingLeft : "5vh" , 
    paddingRight : "5vh",

    },
    [theme.breakpoints.up('sm')]: {
      width : "80vw",
      height : "40vh",    },
      text:{
        marginTop : "5vh"
      },
    
   
    
  },
  centerPaper:{
    display :"flex",
    justifyContent: "center",
    alignItems: "center",
    height : "80vh",
  },
  pageTitle:{
    marginBottom : "1rem"
  }
}));

const Cart = ({
  cart,
  incrementItem,
  decrementItem,
  removeItem,
  emptyCart,
  fetchUserDetails
}) => {
  const classes = useStyles();
  const {currentUser} = useAuth();
  const Loading = () => {
    return <Typography variant="h5">Loading Your Cart....</Typography>;
  };

  const EmptyCart = () => {
      return (
        <Box className={classes.centerPaper}>
      <Paper className={classes.wishlistPaper} elevation={5}>
        <Box>
          <Typography display="block" variant="h4" align="center" >Your Cart is empty</Typography>
        </Box>
        <Box>
        <Typography variant="h6" display="block" className={classes.text}>
          <Link to="/">
            Click here 
            </Link>{' '}
          to add some items to the the wishlist
        </Typography>
        </Box>
      </Paper>
      </Box>);
  };

  useEffect(() => {
    currentUser && (
      fetchUserDetails(currentUser.email)
      )
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
            <Grid container spacing={4}>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
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
                  color="primary"
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
      <Typography variant="h4" color="primary" align="center" className={classes.pageTitle}>
        Your Shopping Cart
      </Typography>

      {cart.line_items === undefined ? <Loading /> : whichCart()}
      {/* {cart.line_items.length===0 ? <EmptyCart/> : <LoadedCart/>} */}
    </>
  );
};

export default Cart;
