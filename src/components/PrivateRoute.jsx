import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import Products from './Products/Products';

const PrivateRoute = ({path, exact, children}) => {
    const {currentUser}= useAuth();
    console.log("Privateroute => ",currentUser);

    const props = children;
    // console.log(props);
        console.log("Privateroute => ",props);



    return (
        <Route
        path={path}
        exact
        render={props =>{
               return (currentUser ? <Products products={props.products} addToCart={props.cart} />  : <Redirect to="/login"/>)
            // return <Component {...props}/>
        }}
        >
        
        </Route>
    )
}

export default PrivateRoute
