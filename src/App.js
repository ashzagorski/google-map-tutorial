import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/Map/Map';






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
      <div className="homepage">
        <div className="header">
          <Header/>
        </div>
        <div className="homepageContent">
            <SearchBar />
        </div>
        <div className="row suggestions">
          <div className="col-12">
             <Map/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;