import { combineReducers } from 'redux';

let defaultState = {
    currentWeather: '',
    city: ''
}

function weather(state = defaultState, action) {
    switch(action.type) {
        case 'POST_CITY':
            return {
                ...state,
                city: action.data.city
            }
        case 'GET_CURRENT_WEATHER':
            console.log("In store GET_CURRENT_WEATHER action: ", action);
            
            return {
                ...state,
                currentWeather: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    weather: weather
});