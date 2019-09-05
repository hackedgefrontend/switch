import React from 'react';
import logo from './logo.svg';
import './App.css';
import GNB from './components/userLoginSignup/GNB'
import Login from './components/userLoginSignup/Login'
import Register from './components/userLoginSignup/Register'
import JobsNearHome from './components/listing/jobNearHome'


import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/nearByJobs" component={JobsNearHome} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
