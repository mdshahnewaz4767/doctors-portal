import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import './App.css';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import DashboardMain from './components/Dashboard/DashboardMain/DashboardMain';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allPatients">
            <AllPatients />
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashboardMain />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
