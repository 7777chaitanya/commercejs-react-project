import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";


const Products = ({products}) => {
  const classes = useStyles();
  return (
    <div >
      <Grid container spacing={1} justifyContent='center'>
        {products.map(product => 
        (<Grid key={product.id} item xs={12} sm={6} md={3} >
            <Product product={product}/>
        </Grid>))}
      </Grid>
    </div>
  );
};

export default Products;

