import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import CommonHomeFinder from './CommonHomeSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/userLoginSignup/Login'
import Register from './components/userLoginSignup/Register'
import HomeNearJob from './components/listing/homeNearJob'
import TempHomes from './components/listing/tempHomes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/commonHomes" component={CommonHomeFinder} />
        <Route exact path="/jobsNearHome" component={HomeNearJob} />
        <Route exact path="/homeNearJob" component={HomeNearJob} />
        <Route exact path="/tempHomes" component={TempHomes} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
