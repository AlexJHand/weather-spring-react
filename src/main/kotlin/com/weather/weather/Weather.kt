package com.weather.weather

import okhttp3.*
import com.fasterxml.jackson.module.kotlin.*

class Weather {
    companion object {
        @JvmStatic fun main(args: Array<String>) {
            val userInput: String = ""
            getLocalWeather(userInput)
        }

        fun getLocalWeather(userInput: String): LocalWeather {
            val url = "http://api.openweathermap.org/data/2.5/weather?q=$userInput&units=imperial&APIID=9cbbe1b60b1c370bd88de8fb2e6f35b3"
            val request = Request.Builder().url(url).build()
            val client = OkHttpClient()

            var weather = LocalWeather()
            val mapper = jacksonObjectMapper()
            var body: String? = client.newCall(request).execute().body()?.string()

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