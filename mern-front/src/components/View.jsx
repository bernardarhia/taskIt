import React from "react";
import { TASK_IT_BACKGROUND } from "../variables/colors";
const View = ({ children }) => {
  return (
    <div
      className="main__view"
      style={{
        background: TASK_IT_BACKGROUND,
        width: "100%",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default View;
