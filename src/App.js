import commerce from "./lib/commerce";
import { Cart, NavBar, Products } from "./components";
import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log(cart.line_items);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const result = await commerce.cart.add(productId, quantity);
    setCart(result.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <NavBar quantity={cart.total_items} />
      {/* <Products products={products} addToCart={handleAddToCart} /> */}
      <Cart cart={cart}/>
    </div>
  );
};

export default App;
