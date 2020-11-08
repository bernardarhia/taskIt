import React from "react";
import { Link } from "react-router-dom";
import { sidebarContent } from "../content/sidebar";
import Button from "./Button";
const Sidebar = ({style, children}) => {
  return (
    <div className="sidebar" style={{...style}}>
      <ul className="sidebar__nav">
        {sidebarContent.map((content, index) => {
          return (
            <li className="sidebar__list" key={index}>
              <Link to={content.route}><span>{content.icons}</span>{content.text}</Link>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;
