import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 10rem;
  margin-top: 4rem;
  background-color: #bababa;
  padding: 1rem;
  opacity: 0.85;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  clip-path: polygon(
    50% 0%,
    70% 35%,
    100% 15%,
    95% 100%,
    5% 100%,
    0 15%,
    30% 35%
  );
  @media (max-width: 500px) {
    grid-gap: 0;
    grid-template-columns: 1fr;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
`;
