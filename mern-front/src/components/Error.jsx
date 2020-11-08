import React from "react";
import Button from "./Button";

const Error = ({ message, clearError }) => {
  return (
    <>
      <div
        className="error__body"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          background: "#ffe8e8",
        }}
      >
        <p style={{ color: "red" }}>{message}</p>
        <Button
          style={{
            height: "30px",
            width: "30px",
            background: "#ffc7c7",
            borderRadius: "50%",
            color: "red",
          }}
          onclick={clearError}
        >
          X
        </Button>
      </div>
    </>
  );
};

export default Error;
