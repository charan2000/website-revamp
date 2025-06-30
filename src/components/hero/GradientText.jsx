import React, { memo } from "react";
import PropTypes from "prop-types";

const GradientText = memo(({ text }) => (
  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent [-webkit-background-clip:text] [background-clip:text] font-semibold">
    {" "}
    {text}{" "}
  </span>
));

GradientText.propTypes = {
  text: PropTypes.string.isRequired,
};

GradientText.displayName = "GradientText";

export default GradientText;
