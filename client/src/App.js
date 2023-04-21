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
import FAQ from './Component/FAQ/FAQ';
import Tab_Pane from './Component/Tab_pane/tab_pane';
import PolicySignup from './Component/Policy_Signup/PolicySignup';
import AdminDashboard from './Component/Admin/AdminDashboard';

class App extends Component {
  render(){
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/" component={SignIn}></Route>
            <Route exact path="/register" component={SignUp} ></Route>
            <Route exact path="/FAQ" component={FAQ} ></Route>
            <Route exact path="/user_dashboard" component={Tab_Pane} ></Route>
            <Route exact path="/policysignup" component={PolicySignup} ></Route>
            <Route exact path="/admin_dashboard" component={AdminDashboard} ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
