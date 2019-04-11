import { connect } from 'react-redux';
import { getLocalWeather } from '../Actions/actionCreator';
import WeatherDisplay from '../../Components/WeatherDisplay';

const mapStateToProps = state => {
    console.log("State ", state);
    
    return {
        currentWeather: state.weather.currentWeather
    }
}

const mapDispatchToProps = dispatch => ({
    searchWeather: city => dispatch(getLocalWeather(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherDisplay);