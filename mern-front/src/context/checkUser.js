const { default: Axios } = require("axios");


  export const getToken = async () => {
    try {
      let token = localStorage.getItem("auth-token");
      // Get user ino if user is logged in
      const tokenRes = await Axios.post(
        "https://task-it-backend.herokuapp.com/api/users/hasToken",
        null,
        {
          headers: { "auth-token": token },
        }
      );

     return tokenRes.data;

    } catch (error) {
      console.log("error", error.message);
    }
  };
  getToken();
