import React from 'react';

const WeatherDisplay = (weatherData) => {
    const weather = weatherData;
    console.log("weather ", weather);
    if (weather.name !== "" && weather !== "An error occurred. Please verify the city entered.") {
        return (
            <div className="weatherDisplay">
                <div className="name">{weather.name}</div>
                <div className="country">{weather.sys.country}</div>
                <div className="descripto">{weather.weather[0].description}</div>
                <div className="temp">{weather.main.temp}</div>
                <div className="high">{weather.main.temp_max}</div>
                <div className="low">{weather.main.temp_min}</div>
            </div>
        )
    } else {
        return <div>An error occurred. Please verify the city entered.</div>
    }
}

export default WeatherDisplay;