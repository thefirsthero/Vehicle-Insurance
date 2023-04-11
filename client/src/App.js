import React, { useContext } from "react";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { LogInfo } from "./store/index";

import "./App.css";

import Registration from "./pages/Registration";
import FrontPage from "./pages/FrontPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const logState = useContext(LogInfo.State);
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={FrontPage}>
          {logState.isLoggedIn ? <Redirect to="/profile" /> : <FrontPage />}
        </Route>
        <Route path="/register" component={Registration} />
        <Route path="/login/" component={Login} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </>
  );
}

export default App;
