import React, { memo } from "react";
import PropTypes from "prop-types";

const GradientText = memo(({ text }) => (
  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent [-webkit-background-clip:text] [background-clip:text] font-black">
    {" "}
    {text}{" "}
  </span>
));

GradientText.propTypes = {
  text: PropTypes.string.isRequired,
};

GradientText.displayName = "GradientText";

export default GradientText;
