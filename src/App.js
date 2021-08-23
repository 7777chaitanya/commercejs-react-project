import commerce from './lib/commerce';
import {NavBar, Products} from './components';
import React, { useState,useEffect } from 'react';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        console.log("fetch products => ",data);
        setProducts(data);

    }

    useEffect(() => {
        fetchProducts();
        
    }, []);



    return (
        <div>
            <NavBar/>
            <Products products={products}/>
        </div>
    )
}

export default App
