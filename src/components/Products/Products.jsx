import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import useStyles from "./styles";
import commerce from "../../lib/commerce";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from '../NavBar/NavBar';
import ContinuousSlider from "../Slider/Slider";
import Pagination from '@material-ui/lab/Pagination';


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
  const [productValue, setproductValue] = useState(30000);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 4;

  const handleProductsValueChange = (value) =>{
    setproductValue(value)
  }

  useEffect(() => {
    currentUser && (
    fetchUserDetails(currentUser.email)
    )
  }, []);

  

  let productsToRender = products?.filter(product => product?.price?.raw <= productValue)
  let productsInCurrentPage = productsToRender.slice((pageNumber-1)*itemsPerPage,itemsPerPage*pageNumber);

  console.log("new value => ",productsToRender);

  const handlePaginationChange = (e,value) =>{
    console.log("value =>",value)
      setPageNumber(value)
  }

  return (
    <div>
      <ContinuousSlider handleProductsValueChange={handleProductsValueChange} />

      <Grid container spacing={1} justifyContent="center">
        {productsInCurrentPage &&
          productsInCurrentPage?.map((product) => (
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
      <Pagination count={Math.ceil((productsToRender.length)/(4))} onChange={handlePaginationChange} color="primary"/>

    </div>
  );
};

export default Products;
