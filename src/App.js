import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.handleGetWeatcher = this.handleGetWeatcher.bind(this);
  } 

  handleGetUserLocation() {

    if (!navigator.geolocation) {
      // status.textContent = 'Geolocation is not supported by your browser';
    } else {
      navigator.geolocation.getCurrentPosition(success);
      console.log(navigator.geolocation);
    }

    function success(position) {
      console.log(position.coords);
      // console.log(Math.);
      console.log('position.coords.latitude', Math.floor(position.coords.latitude).toFixed());
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=ce38ed587808d3813f85284b89f41ed4`)
      .then(response => response.json())
      .then(response => console.log(response))
      this.setState()
    }
  }

  handleGetWeatcher(props1, props2) {
    console.log('hit 3');
    console.log(props1, props2);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <button onClick={ this.handleGetUserLocation }>Current Weather</button>
          <p id="status"></p>
          <a id="map-link" target="_blank"></a>
      </div>
    );
  }
}

export default App;
