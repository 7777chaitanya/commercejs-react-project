import { Grid } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Product from "./Product/Product";
import useStyles from "./styles";
import commerce from "../../lib/commerce";


const Products = ({products, addToCart}) => {
  // const [productsCompProducts, setProductsCompProducts] = useState([]);

  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await commerce.products.list();
  //     setProductsCompProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const classes = useStyles();
  console.log("products comp =>", products);
  return (
    <div >
      <Grid container spacing={1} justifyContent='center'>
        {products.map(product => 
        (<Grid key={product.id} item xs={12} sm={6} md={3} >
            <Product product={product} addToCart={addToCart}/>
        </Grid>))}
      </Grid>
    </div>
  );
};

export default Products;

