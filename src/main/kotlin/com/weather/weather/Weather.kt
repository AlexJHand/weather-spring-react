package com.weather.weather

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.weather.weather.config.Configuration
import okhttp3.OkHttpClient
import okhttp3.Request

class Weather(configuration: Configuration) {
    companion object {
        @JvmStatic fun main(args: Array<String>, configuration: Configuration) {
            val userInput: String = ""
            getLocalWeather(userInput, configuration)
        }

        fun getLocalWeather(userInput: String, configuration: Configuration): LocalWeather {
            val url = "http://api.openweathermap.org/data/2.5/weather?q=$userInput&APPID=${configuration}"
            val request = Request.Builder().url(url).build()
            val client = OkHttpClient()

            var weather = LocalWeather()
            val mapper = jacksonObjectMapper()
            var body: String? = client.newCall(request).execute().body()?.string()
            println("body ${body}")
            if (body != "{\"cod\":\"404\",\"message\":\"city not found\"}" && body != null) {
                weather = mapper.readValue(body)
            } else {
                println("An error has occured.")
            }
            println("weather -> $weather")
            return weather
        }
    }
}