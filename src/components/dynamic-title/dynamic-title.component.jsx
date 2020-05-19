import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const TitleUpdater = ({ title }) => {
  return (
    <Helmet>
      <title>{`My Wardrobe | ${title ? title : "Home"}`}</title>
    </Helmet>
  );
};

export default TitleUpdater;

TitleUpdater.propTypes = {
  title: PropTypes.string,
};

TitleUpdater.defaultProps = {
  title: "Home",
};
