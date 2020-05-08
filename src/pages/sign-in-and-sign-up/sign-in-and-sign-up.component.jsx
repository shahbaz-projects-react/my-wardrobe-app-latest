import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
// import SignUp from "../../components/sign-up/sign-up.component";
import TitleUpdater from "../../components/dynamic-title/dynamic-title.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <TitleUpdater title="SignIn" />
    <SignIn />
    {/* <SignUp /> */}
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
