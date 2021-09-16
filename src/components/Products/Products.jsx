import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import useStyles from "./styles";
import commerce from "../../lib/commerce";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from '../NavBar/NavBar';
import ContinuousSlider from "../Slider/Slider";

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
  const [productValue, setproductValue] = useState(30000)

  const handleProductsValueChange = (value) =>{
    setproductValue(value)
  }

  useEffect(() => {
    currentUser && (
    fetchUserDetails(currentUser.email)
    )
  }, []);

  let productsToRender = products?.filter(product => product?.price?.raw <= productValue)
  console.log("new value => ",productsToRender)

  return (
    <div>
      <ContinuousSlider handleProductsValueChange={handleProductsValueChange} />

      <Grid container spacing={1} justifyContent="center">
        {productsToRender &&
          productsToRender?.map((product) => (
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
