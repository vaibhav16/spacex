import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';
import React from 'react';

function App() {

  return (

    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      
    </Router>

  );
}

export default App;
