import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import SignIn from './Component/Signin/Signin';
import SignUp from './Component/Signup/Signup';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/" component={SignIn}></Route>
            <Route exact path="/register" component={SignUp} ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
