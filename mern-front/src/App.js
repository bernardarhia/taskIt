import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./users/pages/Home";
import Task from "./users/pages/Task";
import Project from "./users/pages/Project";
import Message from "./users/pages/Message";
import Calendar from "./users/pages/Calendar";
import Setting from "./users/pages/Setting";
import UserContext from "./context/userContext";
import Axios from "axios";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";

function App() {
  const [user, setUser] = useState({
    token: '',
    user: '',
  });
 

  useEffect(() => {
    
    const splitUrlValues = window.location.href.split("/");
    const currentLocation = splitUrlValues[splitUrlValues.length - 1];
    console.log("current location -> ", currentLocation);

    // check if user is already logged in

    const checkUserLogIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      // Get user ino if user is logged in
      const tokenRes = await Axios.post(
        "http://localhost:3000/api/users/hasToken",
        null,
        {
          headers: { "auth-token": token },
        }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:3000/api/users", {
          headers: { "auth-token": token },
        });
        setUser({
          token,
          user: userRes.data,
        });
      }
    };

    checkUserLogIn();
  });
  return (
    <>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tasks" exact component={Task} />
            <Route path="/projects" exact component={Project} />
            <Route path="/messages" exact component={Message} />
            <Route path="/calendar" exact component={Calendar} />
            <Route path="/settings" exact component={Setting} />
          </Switch>
        </UserContext.Provider>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
      </Router>
    </>
  );
}

export default App;
