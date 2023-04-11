import React, { useEffect, useState, useContext, useRef } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { LogInfo } from "../store/index";

import "../App.css";

const Registration = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    email: "",
    password: "",
    birthdate: "",
    country: "Afghanistan",
  });
  const [countriesList, setCountriesList] = useState([]);
  const [activeErr, setActiveErr] = useState({
    email: "",
    login: "",
    date: "",
  });
  const [isAgreed, setAgreed] = useState(true);

  const logInfoDispatch = useContext(LogInfo.Dispatch);
  const passInputRef = useRef(null);
  let history = useHistory();
  const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  useEffect(() => {
    axios
      .get("https://register-auth-app.herokuapp.com/api/countries")
      .then((response) => setCountriesList([...response.data]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.birthdate.match(dateRegex)) {
      setActiveErr({ ...activeErr, date: "" });
      axios({
        method: "post",
        url: "https://register-auth-app.herokuapp.com/api/register",
        data: {
          ...registerData,
          timestamp: Math.floor(Date.now() / 1000),
        },
      }).then((response) => {
        if (response.data.code === 200) {
          logInfoDispatch({
            type: "SET_CURR_USER",
            userInfo: { ...response.data.logInInfo },
            isLoggedIn: true,
          });
          history.push("/profile");
        } else if (response.data.code === 405) {
          console.log(response.data);
          passInputRef.current.value = "";
          setActiveErr({
            ...activeErr,
            email: response.data.message[0].email ? "active" : "",
            login: response.data.message[0].login ? "active" : "",
          });
        }
      });
    } else {
      setActiveErr({ ...activeErr, date: "active" });
    }
  };

  let countries;
  if (countriesList !== undefined) {
    countries = countriesList.map((country, id) => (
      <option key={id}>{country.nicename}</option>
    ));
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="input-label">Name</label>
        <input
          type="text"
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
        />

        <label className="input-label">Login</label>
        <input
          type="text"
          onChange={(e) =>
            setRegisterData({ ...registerData, login: e.target.value })
          }
        />

        <p className={"login-err" + " " + activeErr.login}>
          This login has already taken.
        </p>
        <label className="input-label">E-mail</label>
        <input
          type="email"
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
        />

        <p className={"login-err" + " " + activeErr.email}>
          This email has already taken
        </p>
        <label className="input-label">Date of Birth</label>
        <input
          placeholder="yyyy-mm-dd"
          type="text"
          onChange={(e) =>
            setRegisterData({ ...registerData, birthdate: e.target.value })
          }
        />

        <p className={"login-err" + " " + activeErr.date}>Invalid date</p>
        <label className="input-label">Password</label>
        <input
          type="password"
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          ref={passInputRef}
        />
        <label className="input-label">Country</label>
        <select
          onChange={(e) =>
            setRegisterData({ ...registerData, country: e.target.value })
          }
        >
          {countries}
        </select>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="terms"
            onChange={(e) => setAgreed(!e.target.checked)}
          />
          agree with terms and conditions
        </label>
        <input type="submit" value="Submit" disabled={isAgreed} />
      </form>
    </div>
  );
};

export default Registration;
