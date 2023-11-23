import React from "react";
import { Link } from "react-router-dom";

function CustomButton({
  ButtonName,
  width,
  height,
  border,
  backgroundColor,
  fontSize,
  borderRadius,
  fontWeight,
  color
}) {
  return (
    <React.Fragment>
        <button
          className="m-2"
          style={{
            width: width,
            height: height,
            border: border,
            borderRadius:borderRadius,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            color:color,
            fontWeight:fontWeight
          }}
        >
          {ButtonName}
        </button>
    </React.Fragment>
  );
}

export default CustomButton;
