package com.weather.weather

data class LocalWeather(
        val coord: Coord = Coord(),
        val weather: List<WeatherData> = emptyList(),
        val base: String = "",
        val main: Main = Main(),
        val visibility: Int = 0,
        val wind: Wind = Wind(),
        val clouds: Clouds = Clouds(),
        val rain: Rain? = Rain(),
        val snwo: Snow? = Snow(),
        val dt: Long = 0,
        val sys: Sys = Sys(),
        val timezone: Long = 0,
        val id: Long = 0,
        val name: String = "",
        val cod: Int = 0
)