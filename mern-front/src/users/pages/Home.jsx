import React, { useEffect, useContext } from "react";
import Screen from "../../Screen";
import View from "../../components/View";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { useHistory } from "react-router";
import { getToken } from "../../context/checkUser";
import UserContext from "../../context/userContext";
import Button from "../../components/Button";
import UserInfo from "./UserInfo";
const Home = () => {
  const { user, setUser } = useContext(UserContext);
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
  }, []);
  const logout = ()=>{
    localStorage.setItem('auth-token',"");
    history.push('/login')
    window.location.reload()
    window.location.replace('/login');
    return;
  }

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
          >
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                fontSize: "18px",
                background: "none",
                textAlign: "center",
              }}
              onclick={logout}
            >
              Logout
            </Button>
          </Sidebar>
          <Content
            style={{
              height: "100%",
            }}
          >
            <Header></Header>
          <UserInfo />
          </Content>
        </Screen>
      </View>
    </>
  );
};

export default Home;
