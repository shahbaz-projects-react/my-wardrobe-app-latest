import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { registerUser } from '../../redux/user/user.actions'
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ErrorSpan,
  FormContainer,
} from './form.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import TitleUpdater from '../dynamic-title/dynamic-title.component'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    console.log(newUser)
    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { errors } = this.state
    return (
      <SignInContainer>
        <TitleUpdater title="Register" />
        <FormContainer>
          <SignInTitle>Register below</SignInTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ErrorSpan>{errors.name}</ErrorSpan>
            <ErrorSpan>{errors.email}</ErrorSpan>
            <ErrorSpan>{errors.password}</ErrorSpan>
            <ErrorSpan>{errors.password2}</ErrorSpan>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <FormInput
              id="name"
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              label="Name"
            />

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

            <FormInput
              name="password2"
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              label="Confirm Password"
            />

            <ButtonsBarContainer>
              <CustomButton type="submit">Sign Up</CustomButton>
            </ButtonsBarContainer>
          </form>
        </FormContainer>
      </SignInContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.user,
  errors: state.errors,
})

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
