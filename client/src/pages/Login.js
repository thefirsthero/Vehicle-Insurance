import React, { useState, useContext, useRef } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { LogInfo } from "../store/index";
import "../App.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    emailOrLogin: "",
    password: "",
  });

  const [activeErr, setActiveErr] = useState("");
  const logInfoDispatch = useContext(LogInfo.Dispatch);
  const passRef = useRef(null);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://register-auth-app.herokuapp.com/api/login",
      data: {
        ...userInfo,
      },
    }).then((response) => {
      if (response.data.code === 200) {
        logInfoDispatch({
          type: "SET_CURR_USER",
          userInfo: {
            email: response.data.userInfo[0].email,
            name: response.data.userInfo[0].name,
          },
          isLoggedIn: true,
        });
        history.push("/profile");
      } else {
        setActiveErr("active");
        passRef.current.value = "";
      }
    });
  };

  return (
    <div className="App">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email / Login"
          type="text"
          onChange={(e) =>
            setUserInfo({ ...userInfo, emailOrLogin: e.target.value })
          }
        />
        <input
          ref={passRef}
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <p className={"login-err" + " " + activeErr}>Enter correct data</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
