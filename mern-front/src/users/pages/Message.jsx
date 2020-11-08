import React, { useEffect } from "react";
import Screen from "../../Screen";
import View from "../../components/View";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { getToken } from "../../context/checkUser";

const Message = () => {
  let history = useHistory();
  useEffect(() => {
    const result = getToken()
      .then((result) => {
        if (!result) {
          history.push('/login')
          window.location.replace('/login')
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
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
                <Header /><h1>Message</h1>
              </Content>
            </Screen>
          </View>
        </>
    )
}

export default Message
