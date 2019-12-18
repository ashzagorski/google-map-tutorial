import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';





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
      <div className="homepage container-fluid ">
      <div className="row">
        <div className="header">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="homepageContent">
          <div className="row">
            <SearchBar />
          </div>
          <div className="row suggestions">
            <div className="col-12">
             <Map/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default App;