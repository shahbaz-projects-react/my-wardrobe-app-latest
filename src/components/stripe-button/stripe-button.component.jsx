import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuth } from "../../redux/user/user.selectors";
import PropTypes from "prop-types";

const StripeCheckoutButton = ({ price, isAuthenticated }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";

  const onToken = (token) => {
    // console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      disabled={!isAuthenticated}
    />
  );
};

StripeCheckoutButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuth,
});

export default connect(mapStateToProps)(StripeCheckoutButton);
