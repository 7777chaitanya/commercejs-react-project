import React,{useEffect} from "react";
import NavBar from '../NavBar/NavBar';
import {useAuth} from "../../contexts/AuthContext";
import Product from "../Products/Product/Product";
import { Grid } from '@material-ui/core';

const Wishlist = ({userDetails, quantity,fetchUserDetails, products, addToCart, AddToWishlist, deleteFromWishlist}) => {
  console.log("wishlist => ", userDetails, products);

  


  useEffect(() => {
    fetchUserDetails(currentUser.email);
  }, []);

  const {currentUser} = useAuth();
  let localWishlist = [];
  Object.keys(userDetails).length && (
  userDetails.wishlist.forEach(id => {
      products.forEach(product=> {
          if(id===product.id){
            localWishlist.push(product);
          }
      })
  })
  )
  
//   console.log(localWishlist);
  return (
    <div>
        <Grid container spacing={1} justifyContent="center">
        {localWishlist &&
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
          ))}
      </Grid>


    
    </div>
  );
};

export default Wishlist;
