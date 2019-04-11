import axios from 'axios';
import * as types from './actionTypes';

export function updateCity(userInput) {
    console.log("In actionCreator.updateCity, with userInput");
    return {
        type: "POST_CITY",
        data: {city: userInput}
    }
}

export function getLocalWeather(cityName) {
    console.log("In actionCreator.getLocalWeather, with city ", cityName);
    
    return (dispatch) => {
        dispatch({type: "REQUEST_WEATHER", data: cityName})

        axios.get("/api/weather/" + cityName)
            .then(response => {
                console.log("Response ", response);
                
                if(response.status === 200) {
                    const result = response.data;
                    dispatch({
                        type: types.GET_CURRENT_WEATHER,
                        payload: result
                    })
                }
            })
            .catch(error => {
                console.log("Response ", error);
                
                const result = "An error occurred. Please verify the city entered."
                dispatch({
                    type: types.GET_CURRENT_WEATHER,
                    payload: result
                })
            })
    }
};