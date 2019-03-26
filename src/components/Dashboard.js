import React, { Component } from 'react';
import css from '../App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.handleGetUserLocation = this.handleGetUserLocation.bind(this);
  }

  handleGetUserLocation() {
    navigator.geolocation.getCurrentPosition(function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=ce38ed587808d3813f85284b89f41ed4`)
    .then(response => response.json())
    .then(response => {
      const temp = document.getElementById('status')
      temp.innerHTML = `
          <p>Weather in ${ response.name }, ${ response.sys.country }</p>
          <p>${ Math.round(((response.main.temp - 273.15) * 1.8) + 32) } ° F<p/>
          <p>${ response.weather[0].description }</p>
        `
      })
    });
  }

  render() {
    return (
      <div>
        <button className='currentWeatherButton' onClick={ () => this.handleGetUserLocation() }>Current Weather</button>
          <div id="status"></div>
      </div>
    );
  }
}

export default Dashboard;