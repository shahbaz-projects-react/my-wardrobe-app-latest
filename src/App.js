import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import setAuthToken from "./utils/setAuthToken";
import { logoutUser } from "./redux/user/user.actions";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { setPreviousUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    // Check for token to keep user logged in
    if (localStorage.jwtToken_wardrobe) {
      // Set auth token header auth
      const token = localStorage.jwtToken_wardrobe;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      this.props.setPreviousUser(decoded);
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
      }
    }
  }
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

const mapDispatchToProps = (dispatch) => ({
  setPreviousUser: (decoded) => dispatch(setPreviousUser(decoded)),
});

export default connect(null, mapDispatchToProps)(App);
