import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import React from 'react';

function App() {

  return (
    <Route path="/" component={Home} />
  );
}

export default App;
