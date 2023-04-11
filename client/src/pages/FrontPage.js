import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const FrontPage = () => {
  return (
    <div className="front-page">
      <Link to="/register">
        <h1>Register</h1>
      </Link>
      <Link to="/login">
        <h1>Log In</h1>
      </Link>
    </div>
  );
};
export default FrontPage;
