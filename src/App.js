import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import './App.css';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route to="/appointment">
          <Appointment />
        </Route>
        <Route to="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
