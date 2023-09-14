import React, {useState} from "react";
import axios from "axios";
import './WeatherApp.css';
import { Container } from "semantic-ui-react";

function WeatherApp() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6b63a747fe15e755dd257afd11e4b112`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
    })
    setLocation('');
}
}
        return (
            <Container className="main">
            <div className="weatherapp">
            <div className="weather">
            <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder="Enter location"
            onKeyPress={searchLocation}
            type="text"/>
            <div className="weather_container">
                <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}F</h1> : null}
                </div>
                <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
                </div>
                <div className="bottom">
                <div className="feels">
                {data.main ? <p className="bold">{data.main.feels_like.toFixed()}F</p> : null}
                <p>Feels Like</p>
                </div>
                <div className="humidity">
                {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                <p>Humidity</p>
                </div>
                <div className="wind">
                {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </Container>        
        )
}

export default WeatherApp;