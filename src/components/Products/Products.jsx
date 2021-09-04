import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import useStyles from "./styles";
import commerce from "../../lib/commerce";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from '../NavBar/NavBar';

const Products = ({
  products,
  addToCart,
  fetchUserDetails,
  deleteFromWishlist,
  AddToWishlist,
  quantity, userDetails

}) => {
  const classes = useStyles();
  console.log("products comp =>", products);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchUserDetails(currentUser.email);
  }, []);

  return (
    <div>

      <Grid container spacing={1} justifyContent="center">
        {products &&
          products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <Product
                product={product}
                addToCart={addToCart}
                AddToWishlist={AddToWishlist}
                deleteFromWishlist={deleteFromWishlist}
                userDetails={userDetails}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Products;
