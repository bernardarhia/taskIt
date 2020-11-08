import React from "react";

const Button = ({ style, children, onclick, attr, disabled }) => {
  return (
    <button
      style={{ ...style, background:disabled ? "#333":"" }}
      onClick={onclick}
      className={attr}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
