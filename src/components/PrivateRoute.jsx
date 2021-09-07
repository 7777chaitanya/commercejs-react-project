import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const PrivateRoute = ({
    component:Component, 
    products,
    addToCart,
    fetchUserDetails,
    AddToWishlist,
    deleteFromWishlist,
    quantity,
    userDetails,
     ...rest}) => {
    const {currentUser}= useAuth();
    return (
        <Route
        {...rest} 
        render={props=>{
               return currentUser ? 
               <Component 
               products={products}
               addToCart={addToCart}
               fetchUserDetails={fetchUserDetails}
               AddToWishlist={AddToWishlist}
               deleteFromWishlist={deleteFromWishlist}
               quantity={quantity}
               userDetails={quantity} />  : <Redirect to="/login"/>
        }}
        >
        
        </Route>
    )
}

export default PrivateRoute
