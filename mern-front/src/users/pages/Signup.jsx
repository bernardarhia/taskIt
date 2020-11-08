import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Axios from "axios";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const userData = {
    email,
    username,
    password,
    confirmPassword
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    try {
      const user = await Axios.post(
        "https://task-it-backend.herokuapp.com/api/users/register",
        userData
      );
      if (user.data) {
        localStorage.setItem("auth-token", user.data);
        console.log(user.data);

        setTimeout(() => {
          window.location.replace("/");
        }, 3000);
      }
    } catch (error) {
      if (error.response.data.err) {
        setLoading(false);
        setError(error.response.data.err);
      }
    }
  };
  return (
    <div className="login">
      <form action="">
        <div className="error" style={{ color: "red" }}>
          {error && (
            <Error message={error} clearError={() => setError(undefined)} />
          )}
        </div>
        <div className="input__container">
          <div className="email">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="username">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="btn">
            <Button
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                background: "#333",
                color: "#fff",
                cursor: "pointer",
              }}
              onclick={submit}
            >
              {loading ?  <Loader /> : "Signup"}
            </Button>
          </div>
          <span>Have an account?</span> <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
