import React, { useEffect } from "react";
import Screen from "../../Screen";
import View from "../../components/View";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { getToken } from "../../context/checkUser";
import ProjectPortal from "../../components/ProjectPortal";

const Task = () => {
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

  const openPortal = () => <ProjectPortal />
  
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
            <div className="manage" style={{display:"flex", justifyContent:"flex-end",padding:"1.5rem 0"}}>
              <Button
                style={{
                  display: "block",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: " hsla(22, 100%, 50%, 0.72)",
                  fontSize: "1.6rem",
                  color: "#fff",
                  cursor:"pointer"
                }}
                onclick={openPortal}
                attr='add__task'
              >
                +
              </Button>
            </div>
          </Content>
        </Screen>
      </View>
    </>
  );
};

export default Task;
