import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from "../presentational/Input";

class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            sample_input: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        //deconstruct seo_title out of state
        const { sample_input } = this.state;
        return(
            <form id='article-form'>
                <Input 
                    text="Sample Input"
                    label="sample_input"
                    type="text"
                    id="sample_input"
                    value={sample_input}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}

export default WeatherContainer;

const wrapper = document.getElementById('weather-container');
wrapper ? ReactDOM.render(<WeatherContainer />, wrapper) : false;