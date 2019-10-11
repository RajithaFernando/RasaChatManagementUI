import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Database from "./components/Database";
import Landing from './components/Landing';
import CreateFunction from './components/CreateFunction';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Landing} />
        <Route exact path="/Database" component={Database} />
        <Route exact path="/CreateFunction" component={CreateFunction} />
      </div>
    </Router>
  );
}

export default App;
