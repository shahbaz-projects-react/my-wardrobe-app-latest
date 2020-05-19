import React from "react";
import { FooterContainer } from "./footer.styles";
import { ReactComponent as Copy } from "../../assets/Copyright.svg";
import { ReactComponent as LinkedIn } from "../../assets/LinkedIn.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <span style={{ justifySelf: "center", alignSelf: "end" }}>
        <Copy style={{ margin: "0 0.2rem" }} />
        {new Date().getFullYear()}, My-Warbrobe by CRWN
      </span>
      <span style={{ justifySelf: "center", alignSelf: "end" }}>
        Created by Shahbaz Gul Khan.
        <a
          href={process.env.REACT_APP_LINKEDIN_PROFILE}
          target="_blank"
          rel="noreferrer noopener"
        >
          {"  "}Connect
          <LinkedIn
            style={{ margin: "0 0.2rem", width: "1rem", height: "1rem" }}
          />
        </a>
      </span>
    </FooterContainer>
  );
};

export default Footer;
