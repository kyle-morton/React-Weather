import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherList from "../presentational/WeatherList";

class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            days: []
        };
        this.weatherAPI = 'http://api.apixu.com/v1/forecast.json';
        this.defaultZip = 72211;
    }
    createApiUrl(zipCode) {
        return this.weatherAPI 
        + '?key=' + config.API_KEY
        + '&days=7&q=' + zipCode;
    }
    convertDateToModel(forecastDay) {
        var model = {
            key: forecastDay.date_epoch,
            dayOfWeek: moment(forecastDay.date, 'YYYY-MM-DD').format('dddd'),
            icon: 'http:' + forecastDay.day.condition.icon,
            iconTitle: forecastDay.day.condition.text,
            highTemp: parseInt(forecastDay.day.maxtemp_f),
            lowTemp: parseInt(forecastDay.day.mintemp_f)
        };
        // console.log('model: ' + JSON.stringify(model));
        return model;
    }
    componentDidMount() {
        var url = this.createApiUrl(this.defaultZip);

        //call api to get 7 day forecast
        axios.get(url)
        .then((res) => {
            var dates = res.data.forecast.forecastday;
            var dateModels = dates.map((forecastDay) => {
                return this.convertDateToModel(forecastDay);
            });
            console.log('date models: ' + dateModels.length);
            this.setState({
                days: dateModels
            });
        });
    }
    render() {
        const { days } = this.state;
        if (days.length > 0) 
            return(
                <div>
                    <WeatherList 
                        days={days}
                    />
                </div>  
            );
        else 
            return(
                <div className="text-center">
                    <h4 className='bold'><i className="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...</h4>
                </div>
            )
    }
}

export default WeatherContainer;

const wrapper = document.getElementById('weather-container');
wrapper ? ReactDOM.render(<WeatherContainer />, wrapper) : false;