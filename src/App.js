import React from 'react';
import AppLogo from './appLandingLogo';
import Header from './Header';
import Dashboard from './Dashboard';
import CommonHomeFinder from './CommonHomeSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/commonHomes" component={CommonHomeFinder} />
      </Router>
    </div>
  );
}

export default App;
