import styled from "styled-components";

export const SignInContainer = styled.div`
  grid-row: 1;
  grid-column: 2/3;
  @media (max-width: 500px) {
    grid-column: 1;
    text-align: center;
  }
  max-width: 350px;
`;

// export const SignInContainer = styled.div`
//   width: 380px;
//   display: flex;
//   flex-direction: column;
// `;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
