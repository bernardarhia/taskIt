import React, { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
const Alert = ({ type, message }) => {
  let color = "";
  let icon = "";
  let header = "";
  switch (type) {
    case "success":
      color = "#4033f8";
      header = "Success";
      icon = <FiCheck />;
      break;
    case "error":
      color = "#fb4a4a";
      header = "Error";
      icon = '!';
      break;
    default:
      break;
  }

  const [displayAlert, setDisplayAlert] = useState(true);

  const removeAlert = () => {
    setDisplayAlert(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayAlert(false);
    }, 6000);

    return ()=>{
      setDisplayAlert(false)
    }
  });
  return (
    <div
      className="alert"
      style={{ display: displayAlert ? "block" : "none", cursor: "pointer" }}
    >
      <div className="alert__body">
        <div className="icon" style={{ borderColor: color }}>
          <span style={{ background: color }}>{icon}</span>
        </div>
        <div className="content">
          <p className="header">{header}</p>
          <p className="para">{message}</p>
        </div>

        <div className="close" onClick={removeAlert}>
          <FiX />
        </div>
      </div>
    </div>
  );
};

export default Alert;
