import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
// import SignUp from "../../components/sign-up/sign-up.component";
import TitleUpdater from "../../components/dynamic-title/dynamic-title.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
import Login from "../../components/auth/login";
import Register from "../../components/auth/register";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <TitleUpdater title="SignIn" />
    <Login />
    <Register />
    {/* <SignIn /> */}
    {/* <SignUp /> */}
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
