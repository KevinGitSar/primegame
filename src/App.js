//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Game from './Components/Game'
import Home from './Components/HomePage'

import {
  BrowserRouter as Router,
  Route,
  //Link,
  NavLink
} from 'react-router-dom'

class App extends Component{
  render(){
    return(
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand"><img src="PTG.png" alt="PTG" width="50" height="50"/></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav menu-bar">
            <li className="nav-item active">
              <NavLink className="nav-link" to='/'>Home</NavLink> <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"to='/PrimeGame'>Game</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      

        <Route exact path="/" component = {Home} />
        <Route exact path="/PrimeGame" component = {Game} />
    </div>
    </Router>
    )
  }
}

export default App;
