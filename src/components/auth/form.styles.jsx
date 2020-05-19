import styled from "styled-components";

export const SignInContainer = styled.div`
  text-align: center;
  display: grid;
`;
export const FormContainer = styled.div`
  max-width: 350px;
  justify-self: center;
  align-self: center;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorSpace = styled.div`
  color: red;
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const ErrorSpan = styled.span`
  font-size: 0.8rem;
  color: red;
  margin: 0 0.5rem;
  font-weight: bold;
`;
