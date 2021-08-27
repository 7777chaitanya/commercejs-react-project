import commerce from "./lib/commerce";
import { Cart, NavBar, Products, Checkout } from "./components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log("App.js =>",process.env.REACT_APP_CHEC_PUBLIC_KEY);

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

  const incrementItemQuantity = async (item, quantity) => {
    const { cart } = await commerce.cart.add(item.product_id, quantity);
    setCart(cart);
  };

  const decrementItemQuantity = async (item, quantity) => {
    const { cart } =
      item.quantity < 2
        ? await commerce.cart.remove(item.id)
        : await commerce.cart.add(item.product_id, quantity);
    setCart(cart);
  };

  const removeItem = async (id) => {
    const { cart } = await commerce.cart.remove(id);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  return (
    <Router>
      <NavBar quantity={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} addToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            incrementItem={incrementItemQuantity}
            decrementItem={decrementItemQuantity}
            removeItem={removeItem}
            emptyCart={emptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart.line_items} emptyCart={emptyCart}/> 
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
