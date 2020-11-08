import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Axios from "axios";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import ProjectPortal from "../../components/ProjectPortal";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
const [disabled, setDisabled] = useState(false)
  const userData = {
    email,
    password,
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    setDisabled(true);
    try {
      const user = await Axios.post(
        "https://task-it-backend.herokuapp.com/api/users/login",
        userData
      );
console.log(user.data);
      if (user.data) {
        localStorage.setItem("auth-token", user.data);
          const userRes = await Axios.get("http://localhost:3000/api/users", {
            headers: { "auth-token": token },
          });
          setUser({
            token,
            user: userRes.data,
          });
          setTimeout(() => {
            window.location.replace("/");
          }, 3000);
        }
        
    } catch (error) {
      if (error.response.data.err) {
        setLoading(false);
        setError(error.response.data.err);
        setDisabled(false)
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

          <div className="btn">
            <Button
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                background: "#333 !important",
                color: "#fff",
                cursor: "pointer",
              }}
              onclick={submit}
              disabled={disabled}
            >
              {loading ? <Loader /> : "Login"}
            </Button>
          </div>
          <span>Not registered? </span>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
