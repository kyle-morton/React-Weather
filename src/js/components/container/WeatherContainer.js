import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherList from "../presentational/WeatherList";

var data = [
    {
        key: 1,
        day: 'Sunday',
        weather: 'Sunny',
        highTemp: 76,
        lowTemp: 32
    },
    {
        key: 2,
        day: 'Monday',
        weather: 'Sunny',
        highTemp: 61,
        lowTemp: 43
    },
    {
        key: 3,
        day: 'Tuesday',
        weather: 'Cloudy',
        highTemp: 55,
        lowTemp: 33
    }
]

class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            days: data
        };
    }
    render() {
        //deconstruct seo_title out of state
        const { days } = this.state;
        return(
            <div>
                <WeatherList 
                    days={days}
                />
            </div>  
        );
    }
}

export default WeatherContainer;

const wrapper = document.getElementById('weather-container');
wrapper ? ReactDOM.render(<WeatherContainer />, wrapper) : false;