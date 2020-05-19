import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectAuth } from "../../redux/user/user.selectors";
import { logoutUser } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import PropTypes from "prop-types";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ isAuthenticated, hidden, logoutUser }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {isAuthenticated ? (
          <OptionLink as="div" onClick={onLogoutClick}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/login">SIGN IN</OptionLink>
        )}
        {!isAuthenticated && <OptionLink to="/register">Register</OptionLink>}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuth,
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
