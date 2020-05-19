import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user/user.actions.js";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ErrorSpace,
  FormContainer,
} from "./form.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated) {
      this.props.history.push("/"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <SignInContainer>
        <FormContainer>
          <SignInTitle>Already have an account?</SignInTitle>
          <span>Sign in with your email and password</span>
          <ErrorSpace>
            {(errors.email ||
              errors.emailnotfound ||
              errors.password ||
              errors.passwordincorrect) &&
              "Email or Password is incorrect"}
          </ErrorSpace>
          <form noValidate onSubmit={this.onSubmit}>
            <FormInput
              name="email"
              id="email"
              type="email"
              onChange={this.onChange}
              value={this.state.email}
              label="Email"
              error={errors.email}
            />

            <FormInput
              name="password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              label="Password"
            />
            <ButtonsBarContainer>
              <CustomButton type="submit">Login</CustomButton>
            </ButtonsBarContainer>
          </form>
        </FormContainer>
      </SignInContainer>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
