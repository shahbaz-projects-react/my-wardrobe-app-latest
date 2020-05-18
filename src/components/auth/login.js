import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import classnames from "classnames";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
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

  // componentDidMount() {
  //   if (this.props.user.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user.isAuthenticated) {
  //     this.props.history.push("/"); // push user to dashboard when they login
  //   }
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors,
  //     });
  //   }
  // }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    // this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>Already have an account?</SignInTitle>

        <div>
          <h4>
            <b>Login</b> below
          </h4>
          {/* <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p> */}
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <FormInput
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            // className={classnames("", {
            //   invalid: errors.email || errors.emailnotfound,
            // })}
          />
          <label htmlFor="email">Email</label>
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>

          <FormInput
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            // className={classnames("", {
            //   invalid: errors.password || errors.passwordincorrect,
            // })}
          />
          <label htmlFor="password">Password</label>
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>

          <ButtonsBarContainer>
            <CustomButton
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Login
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
Login.propTypes = {
  // loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});
export default connect(mapStateToProps)(Login);
