import React, {Component} from 'react';
import FunctionalComponent from './FunctionalComponent'

type Location = {
    lat: number,
    lon: number,
    city: string,
    temp: number,
    weather: string,
    
}

export default class Geolocation extends Component<{}, Location> {
    constructor(props: Location) {
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            city: "",
            temp: 0,
            weather: "",
            
        }
    }

    coordinates = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                
                console.log(position);
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
            this.openWeather()
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    openWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=5c75a1933fa9bac1a53dcf4cec534085&units=imperial`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                temp: json.main.temp,
                city: json.name,
                weather: json.weather[0].description
            })
        })
        .catch(err => console.log(err))
    }


  render() {
      return(
          <div>
            <FunctionalComponent lat={this.state.lat} lon={this.state.lon} city={this.state.city} temp={this.state.temp} weather={this.state.weather}/>
            <button style={{marginTop: "20px"}} onClick={this.coordinates}>search</button>
          </div>
      )
  }
}
