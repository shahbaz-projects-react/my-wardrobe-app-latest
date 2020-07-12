import React from "react";

import Directory from "../../components/directory/directory.component";
import TitleUpdater from "../../components/dynamic-title/dynamic-title.component";

import { HomePageContainer } from "./homepage.styles";

class HomePage extends React.Component {
  componentDidMount() {
    
  }
  componentDidUpdate(prevProps, prevState) {
    
  }
  render() {
    return (
      <HomePageContainer>
        <TitleUpdater />
        <Directory />
      </HomePageContainer>
    );
  }
}

export default HomePage;
