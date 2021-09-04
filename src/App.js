import commerce from "./lib/commerce";
import { Cart, NavBar, Products, Checkout, Wishlist } from "./components";
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
import PrivateRoute from "./components/PrivateRoute";
import LoginLogout from "./components/LoginLogout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./components/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [userEmail, setUserEmail] = useState("");

  console.log("App.js =>", userDetails);

  const fetchUserDetails = async (userEmail) => {
    const docRef = doc(db, "customerDetails", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    // setWishlist(docSnap.data().wishlist);
    setUserDetails(docSnap.data());
    setUserEmail(userEmail);
  };

  const updateUserDetails = () => {};

  const AddToWishlist = async (id) => {
    const userDetailsCopy = { ...userDetails };
    console.log(
      "before entering add to wish list => ",
      userDetailsCopy.wishlist
    );
    if (userDetailsCopy.wishlist.indexOf(id) === -1) {
      userDetailsCopy.wishlist.push(id);
    }
    console.log("AddToWishlist =>", userDetailsCopy);

    try {
      setUserDetails(userDetailsCopy);
      await setDoc(doc(db, "customerDetails", userEmail), {
        ...userDetailsCopy,
      });
      toast.success("Added to Wishlist");
    } catch (e) {
      toast.error("Couldn't add to wishlist");
    }
  };

  const deleteFromWishlist = async (id) => {
    const userDetailsCopy = { ...userDetails };
    let modifiedWishlistArray = userDetailsCopy.wishlist.filter((prodId) => {
      return prodId !== id;
    });
    userDetailsCopy.wishlist = [...modifiedWishlistArray];
    console.log("deleteFromWishlist =>", userDetailsCopy);
    try {
      setUserDetails(userDetailsCopy);
      await setDoc(doc(db, "customerDetails", userEmail), {
        ...userDetailsCopy,
      });
      toast.success("Removed from  Wishlist");
    } catch (e) {
      toast.error("Couldn't remove from wishlist");
    }
  };

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

  // useEffect(() => {
  //   console.log("hi")
  // }, [userDetails])

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
    <>
      <AuthProvider>
        <Router>
          {/* <Switch> */}
          <NavBar quantity={cart.total_items} userDetails={userDetails} />
          {/* </Switch> */}
          {/* <Switch> */}
          {/* <LoginLogout /> */}
          {/* </Switch> */}
          {/* <Switch> */}
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
              quantity={cart.total_items}
              userDetails={userDetails}
              fetchUserDetails={fetchUserDetails}

            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart.line_items}
              emptyCart={emptyCart}
              fetchUserDetails={fetchUserDetails}
            />
          </Route>
          <Route path="/wishlist" exact>
            <Wishlist
              quantity={cart.total_items}
              userDetails={userDetails}
              fetchUserDetails={fetchUserDetails}
              products={products}
              AddToWishlist={AddToWishlist}
              deleteFromWishlist={deleteFromWishlist}


            />
          </Route>
          <Route path="/" exact>
            <Products
              products={products}
              addToCart={handleAddToCart}
              fetchUserDetails={fetchUserDetails}
              AddToWishlist={AddToWishlist}
              deleteFromWishlist={deleteFromWishlist}
              quantity={cart.total_items}
              userDetails={userDetails}
            />
          </Route>

          {/* <PrivateRoute path="/" exact products={products} addToCart={handleAddToCart} component={Products} /> */}

          {/* <PrivateRoute path="/" exact products={products} addToCart={handleAddToCart} component={Products} /> */}
          {/* </Switch> */}
        </Router>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
