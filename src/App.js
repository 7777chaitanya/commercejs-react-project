import commerce from "./lib/commerce";
import { Cart, NavBar, Products, Checkout } from "./components";
import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
// import Dashboard from "./Dashboard";

// import { useAuth } from "./contexts/AuthContext";

// import app from "./components/firebase";
import PrivateRoute from "./components/PrivateRoute";
import LoginLogout from "./components/LoginLogout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log("App.js =>", products);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
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
    <AuthProvider>
      <Router>
        <Switch>
          <NavBar quantity={cart.total_items} />
        </Switch>
        <Switch>
          <LoginLogout />
        </Switch>
        <Switch>
          {/* <Route path="/forgot-password" exact component={ForgotPassword} /> */}
          <Route path="/signup" exact component={SignupForm} />
          <Route path="/login" exact component={LoginForm} />
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
            <Checkout cart={cart.line_items} emptyCart={emptyCart} />
          </Route>
          <Route path="/" exact>
            <Products products={products} addToCart={handleAddToCart} />
          </Route>
          {/* <PrivateRoute path="/" exact products={products} addToCart={handleAddToCart} component={Products} /> */}

          {/* <PrivateRoute path="/" exact products={products} addToCart={handleAddToCart} component={Products} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
