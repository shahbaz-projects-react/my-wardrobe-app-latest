import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row;
  @media (max-width: 500px) {
    flex-direction: column;
    font-size: 1.3rem;
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  margin: 0 0.1rem;
  height: 100%;
  padding: 10px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  margin: 0 0.1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const OptionLink = styled(Link)`
  margin: 0 0.1rem;
  padding: 10px 15px;
  cursor: pointer;
  @media (max-width: 500px) {
    text-align: center;
    width: 100%;
    padding: 0px 10px;
  }
`;

// export const HeaderContainer = styled.header`
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;
// `;

// export const LogoContainer = styled(Link)`
//   height: 100%;
//   width: 70px;
//   padding: 25px;
// `;

// export const OptionsContainer = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export const OptionLink = styled(Link)`
//   padding: 10px 15px;
//   cursor: pointer;
// `;
