const Icon = ({src, title}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <img src={src} title={title}/>
            </div>
        </div>
    );
};

Icon.propTypes = {
    src: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

const LocationInput = ({zipCodeChanged, zipCode}) => {
    let input;
    return(
        <div className='text-center col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12'>
            <form onSubmit={(e) => zipCodeChanged(input.value, e)}>
                <label>
                    Zip Code
                </label>
                <input type='text' className='form-control' maxLength='5' ref={node => { input = node; }} />
                <br />
                <button type='submit' className='btn btn-default'>
                    Submit
                </button>
            </form>
        </div>
    );
};

LocationInput.propTypes = {
    zipCodeChanged: React.PropTypes.func.isRequired,
    zipCode: React.PropTypes.string.isRequired
};

const Temperature = ({highTemp, lowTemp}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="high-temp">
                    {highTemp}<i>&deg;</i>
                </div>
                <div className="low-temp light-gray">
                    {lowTemp}<i>&deg;</i>
                </div>
            </div>
        </div>
    );
};

Temperature.propTypes = {
    highTemp: React.PropTypes.number.isRequired,
    lowTemp: React.PropTypes.number.isRequired
};

const Title = ({dayOfWeek}) => {
    return(
        <div>
            <strong className="light-gray">
                {dayOfWeek}
            </strong>
            <br />
        </div>
    );
};

Title.propTypes = {
    dayOfWeek: React.PropTypes.string.isRequired
};

const Weather = ({day, index}) => {
    var classNames = 'col-lg-1 col-md-1 col-sm-3 col-xs-4 weather-column';
    if (index === 0)
        classNames += ' col-lg-offset-2 col-md-offset-2';
    return(
        <div className={classNames}>
            <Title 
                dayOfWeek={day.dayOfWeek}
                />
            <Icon
                src={day.icon}
                title={day.iconTitle}
                />
            <Temperature 
                highTemp={day.highTemp}
                lowTemp={day.lowTemp}
            />
        </div>
    );
};

Weather.propTypes = {
    day: React.PropTypes.object.isRequired,
    index: React.PropTypes.number.isRequired
};

const WeatherList = ({days}) => {
    const forecastDays = days.map((day, index) => {
        return(
            <Weather 
                day={day}
                key={day.key}
                index={index}
            />
        )
    });
    return(
        <div className="row text-center">
            {forecastDays}
        </div>
    );
};

WeatherList.propTypes = {
    days: React.PropTypes.array.isRequired
};


class WeatherContainer extends React.Component {
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
};

const wrapper = document.getElementById('weather-container');
wrapper ? ReactDOM.render(<WeatherContainer />, wrapper) : false;