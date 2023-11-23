import React from 'react';

const CustomButton = ({
  color,
  borderColor,
  borderRadius,
  height,
  width,
  text,
  onClick,
  backgroundColor,
}) => {
  const buttonStyle = {
    color: color || 'white',
    borderColor: borderColor || 'transparent',
    borderRadius: borderRadius || '4px',
    height: height || '40px',
    width: width || '120px',
    backgroundColor: backgroundColor || 'blue',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
