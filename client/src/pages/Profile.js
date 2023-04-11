import React, { useContext } from "react";

import { LogInfo } from "../store/index";
import { useHistory } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const logState = useContext(LogInfo.State);
  const logDispatch = useContext(LogInfo.Dispatch);
  let history = useHistory();

  const onLogout = () => {
    logDispatch({ type: "LOG_OUT" });
    history.push("/");
  };
  return (
    <div className="profile">
      <h1>{"E-mail: " + logState.userInfo.email}</h1>
      <h1>{"Name: " + logState.userInfo.name}</h1>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
