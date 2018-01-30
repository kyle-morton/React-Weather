import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherList from "../presentational/WeatherList";
import LocationInput from "../presentational/LocationInput";

class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            days: [],
            city: 'Little Rock',
            zipCode: '72211'
        };
        this.weatherAPI = 'http://api.apixu.com/v1/forecast.json';
        // This binding is necessary to make `this` work in the callback
        this.zipCodeChanged = this.zipCodeChanged.bind(this);
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
    updateForecast (zipCode) {
        var url = this.createApiUrl(zipCode);

        //call api to get 7 day forecast
        axios.get(url)
        .then((res) => {
            var city = res.data.location.name;
            var dates = res.data.forecast.forecastday;
            var dateModels = dates.map((forecastDay) => {
                return this.convertDateToModel(forecastDay);
            });
            this.setState({
                days: dateModels,
                zipCode: zipCode,
                city: city
            });
        });
    }
    zipCodeChanged (zipCode, e) {
        e.preventDefault();
        // console.log('zip code changed: ' + zipCode + '/' + this.state.zipCode);

        //if invalid or same zip, skip change event
        if (!zipCode || zipCode.length < 5 || zipCode === this.state.zipCode)
            return;

        this.updateForecast(zipCode);

    }
    componentDidMount() {
        this.updateForecast(this.state.zipCode);
    }
    render() {
        const { days, zipCode, city } = this.state;
        if (days.length > 0) 
            return(
                <div>
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h2>{city} Weather ({zipCode})</h2>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <LocationInput 
                            zipCodeChanged={this.zipCodeChanged} 
                            zipCode={zipCode}/>
                    </div>
                    <hr />
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