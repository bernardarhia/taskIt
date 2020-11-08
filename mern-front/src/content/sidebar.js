import * as icons from "react-icons/fi";
import React from 'react'
export const sidebarContent = [
  {
    icons:<icons.FiGrid style={{width:"25px",height:"25px"}}/>,
    route: "/",
    text: "Dashboard",
    isActive: true,
  },
  {
    icons:<icons.FiLayout style={{width:"25px",height:"25px"}}/>,
    route: "/tasks",
    text: "Task",
    isActive: false,
  },
  {
    icons:<icons.FiList style={{width:"25px",height:"25px"}}/>,
    route: "/projects",
    text: "Project",
    isActive: false,
  },
  {
    icons:<icons.FiMessageCircle style={{width:"25px",height:"25px"}}/>,
    route: "/messages",
    text: "Message",
    isActive: false,
  },
  {
    icons:<icons.FiCalendar style={{width:"25px",height:"25px"}}/>,
    route: "/calendar",
    text: "Calendar",
    isActive: true,
  },
  {
    icons:<icons.FiSettings style={{width:"25px",height:"25px"}}/>,
    route: "/settings",
    text: "Setting",
    isActive: true,
  },
];
