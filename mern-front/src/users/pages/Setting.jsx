import React, { useContext, useEffect } from "react";
import Screen from "../../Screen";
import View from "../../components/View";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { useHistory } from "react-router";
import { getToken } from "../../context/checkUser";
import Button from "../../components/Button";
import Axios from "axios";
import UserContext from "../../context/userContext";

const Setting = () => {
  const { user } = useContext(UserContext);
  let id = user.user._id;
  let history = useHistory();

  useEffect(() => {
    const result = getToken()
      .then((result) => {
        if (!result) {
          history.push("/login");
          window.location.replace("/login");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  });

  const deleteAccount = async () => {
    const token = localStorage.getItem("auth-token");
    try {
      let data = await Axios.delete(
        "http://localhost:3000/api/users/delete_user/" + id,
        {
          headers: { "auth-token": token },
        }
      );

      if (data.data) {
        localStorage.setItem("auth-token", "");
        setTimeout(() => {
          history.push("/login");
          window.location.replace("/login");
        }, 3000);
      }
    } catch (error) {
      if (error.response.data.err) {
        console.log(error.response.data.err);
      }
    }
  };

  return (
    <>
      <View>
        <Screen style={{ height: "98vh", margin: "auto" }}>
          {" "}
          <Sidebar
            style={{
              height: "100%",
              background: "white",
              boxShadow: "0 0 10px rgba(51, 51, 51, 0.075)",
              borderRadius: "10px",
            }}
          />
          <Content
            style={{
              height: "100%",
            }}
          >
            <Header />
            <h1>Settings</h1>
            <Button onclick={deleteAccount}>Delete account</Button>
          </Content>
        </Screen>
      </View>
    </>
  );
};

export default Setting;
