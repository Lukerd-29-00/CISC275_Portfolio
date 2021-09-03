import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Link} from "react-router-dom";
import {Dashboard} from "./tic-tac-toe/components/Dashboard";
function App() {
  return (
  <>
    <div>
      Hi! my name is Lucas Driscoll, and this is the first page of my CISC 275-010 portfolio! this page is hosted on github pages using <a href="https://github.com/Lukerd-29-00/Portfolio">this repository</a>.
    </div>
    <div>
      <HashRouter basename="/">
        <div>
          <Link to="/tst">tst</Link>
          <hr/>
          <Route exact path="/tst" component={Dashboard}/>
        </div>
      </HashRouter>

    </div>
  </>
    
  );
}

export default App;
