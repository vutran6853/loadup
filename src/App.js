import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.handleGetWeatcher = this.handleGetWeatcher.bind(this);
  } 

  handleGetUserLocation = () => {
      navigator.geolocation.getCurrentPosition(function success(position) {
        console.log(position.coords);

        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=ce38ed587808d3813f85284b89f41ed4`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          const me = document.getElementById('status')
          const mee = 
          console.log((((response.main.temp - 273.15) * 1.8) + 32))
          me.append(Math.round(((response.main.temp - 273.15) * 1.8) + 32) + '°')
        })  
        console.log(this);
      });
  }

  handleGetWeatcher(props1, props2) {
    console.log('hit 3');
    console.log(props1, props2);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
