import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// // import Userdata from './Components/Userdata';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Layout/Homepage';
import Login from './Components/Layout/Loginpage';
import Projectitem from './Components/Projectitem';
import Footer from './Components/Layout/Footer';
import Profile from './Components/Layout/Profilepage';
import Requireditem from './Components/Layout/Requireditem';
import PrivateRoute from './Components/routing/PrivateRoute';
import './App.css';
import ProjectState from './context/project/ProjectState';
// import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import AuthState from './context/auth/AuthState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <ProjectState>
      <AuthState>
        {/* <AlertState> */}
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/projects' component={Projectitem} />
              <PrivateRoute exact path='/required' component={Requireditem} />
            </Switch>
          </Fragment>
        </Router>
        {/* </AlertState> */}
      </AuthState>
    </ProjectState>
  );
};

export default App;
