import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SourcerySignUp from './pages/SourcerySignUp';
import Congrats from './pages/Congrats';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
          <div className="FormTitle"> Sourcery</div>

          <Route exact path="/" component={SourcerySignUp}>

          </Route>

          <Route exact path="/Congrats" component={Congrats}>

          </Route>
          </div>
        </div>
      </Router>




    );
  }
}

export default App;
