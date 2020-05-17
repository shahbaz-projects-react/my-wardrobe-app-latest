import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { setCurrentUser } from "./redux/user/user.actions";
import setAuthToken from "./utils/setAuthToken";
import { logoutUser } from "./redux/user/user.actions";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

// Check for token to keep user logged in
if (localStorage.jwtToken_wardrobe) {
  // Set auth token header auth
  const token = localStorage.jwtToken_wardrobe;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store
    .dispatch(setCurrentUser(decoded))
    .then(() =>
      console.log("received").catch((err) => ("The error is :", err))
    );
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
