import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';






class App extends Component {

  componentDidMount = () => {
    fetch(`http://localhost:4000/api/rivers`)
      .then(res => res.json())
      .then(data => {
        this.setState({rivers: []})
      })
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-light">
          <a className="nav-link active" id="navLink" href="/">SIGN UP</a>
          <ul className="nav justify-content-center">
            <a className="navbar-brand" href="/">
              <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="Yama Logo"/>
              YAMA FISHING
            </a>
          </ul>
          <ul className="nav justify-content-end">
             <li className="nav-item">
                <a className="nav-link active" id="navLink" href="/">SIGN IN</a>
              </li>
             <li className="nav-item">
                <a className="nav-link" id="navLink" href="/">BLOG</a>
              </li>
            </ul>
        </nav>

        <nav className="navbar navbar-light bg-light">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-light btn-outline-secondary" type="submit">Search</button>
          </form>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Fish Type
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Action</a>
               <a class="dropdown-item" href="/">Another action</a>
              <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Class
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Action</a>
               <a class="dropdown-item" href="/">Another action</a>
              <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
      
        </nav>

        <Map/>
      </div>
    );
  }
}
export default App;