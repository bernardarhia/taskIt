import React from "react";

const Screen = ({ children, style }) => {
  return (
    <div
      className="main__screen"
      style={{
        ...style, 
        width: "98%",
        display: "grid",
        gridTemplateColumns: "20% 78%",
        gridGap: "1rem",
        margin: "1rem auto",
      }}
    >
      {children}
    </div>
  );
};

export default Screen;
