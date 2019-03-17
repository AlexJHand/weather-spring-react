package com.weather.weather

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class WeatherController {
    @GetMapping("/api/weather/{userCity}")
    fun postCity(@PathVariable userCity: String): LocalWeather {
        println(userCity)
        val userWeather = Weather.getLocalWeather(userCity)
        return userWeather
    }
}