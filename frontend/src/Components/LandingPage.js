import React from 'react';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';
import * as Actions from '../Store/Actions/actionCreator';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.displayWeather = this.displayWeather.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayWeather() {
        if (this.props.currentWeather !== "") {
            console.log("displayWeather state: ", this.props);
            
            return (
                <div>
                    {WeatherDisplay(this.props.currentWeather)}
                </div>
            )
        } else {
            return <div></div>
        }
    }

    handleChange = (formValue) => {
        console.log("Update form state - city ", formValue.target.value);
        this.props.dispatch(Actions.updateCity(formValue.target.value));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit", this.state);
        this.props.dispatch(Actions.getLocalWeather(this.props.city));
    }

    render() {
        console.log("LandingPage props ", this.props);
        
        return (
            <div>
                <form>
                    <label>
                        Enter in a city.
                        <input 
                            type="text"
                            name="city"
                            onChange={(event) => this.handleChange(event)}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={this.handleSubmit}
                    />
                </form>
                <div className="weather">
                    {this.displayWeather()}
                </div>
            </div>
        )
    }
}

export default connect((state, props) => {
    console.log("Connect state ", state);
    return {
        city: state.weather.city,
        currentWeather: state.weather.currentWeather
    }
})(LandingPage);