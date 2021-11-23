import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useAuth } from "../../contexts/AuthContext";
import Product from "../Products/Product/Product";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
// import Wishlist from './Wishlist';

const useStyles = makeStyles({
  wishlistPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection :"column",
    width : "80vw",
    height : "40vh",
    
  },
  centerPaper:{
    display :"flex",
    justifyContent: "center",
    alignItems: "center",
    height : "80vh",
  },
  pageTitle:{
    marginBottom : "1rem",
    marginTop : '5rem'
  }
});

const Wishlist = ({
  userDetails,
  quantity,
  fetchUserDetails,
  products,
  addToCart,
  AddToWishlist,
  deleteFromWishlist,
}) => {
  const classes = useStyles();
  console.log("wishlist => ", userDetails, products);

  useEffect(() => {
    currentUser && fetchUserDetails(currentUser.email);
  }, []);

  const EmptyWishlist = () => {
    return (
     
      <Box className={classes.centerPaper}>
    <Paper className={classes.wishlistPaper} elevation={5}>
      <Box>
        <Typography display="block" variant="h4" align="center">Your wishlist is empty</Typography>
      </Box>
      <Box>
      <Typography variant="h6" display="block">
        <Typography component={Link} to="/" variant="h6" display="inline" >
          Click here 
        </Typography>{" "}
        to add some items to your wishlist
      </Typography>
      </Box>
    </Paper>
    </Box>);
  };

  const { currentUser } = useAuth();
  let localWishlist = [];
  Object.keys(userDetails).length &&
    userDetails.wishlist.forEach((id) => {
      products.forEach((product) => {
        if (id === product.id) {
          localWishlist.push(product);
        }
      });
    });

  //   console.log(localWishlist);
  return (
    <div>
       <Typography variant="h4" color="primary" align="center" className={classes.pageTitle}>
        Your Wishlist
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {localWishlist &&
          (localWishlist.length > 0 ? (
            localWishlist.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <Product
                  product={product}
                  addToCart={addToCart}
                  AddToWishlist={AddToWishlist}
                  deleteFromWishlist={deleteFromWishlist}
                  userDetails={userDetails}
                />
              </Grid>
            ))
          ) : (
            <EmptyWishlist />
          ))}
      </Grid>
    </div>
  );
};

export default Wishlist;
