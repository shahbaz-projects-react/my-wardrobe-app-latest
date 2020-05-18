import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  margin: 30px auto;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  justify-items: center;
`;

// export const SignInAndSignUpContainer = styled.div`
//   width: 850px;
//   display: flex;
//   justify-content: space-between;
//   margin: 30px auto;
// `;
