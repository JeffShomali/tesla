import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthService from "./services/auth.service";


import {
  Dashboard,
  Home,
  Login,
  Register 
} from './components/index'

class App extends Component {
  render () {
    return (
      <div className="App">
      <BrowserRouter >
          <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <Route exact path="/register" component={Register} />                
                <Route exact path="/dashboard" component={Dashboard} />                
                <Route exact path="/Home" component={Home} />                
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
