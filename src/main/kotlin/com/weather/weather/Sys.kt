package com.weather.weather

data class Sys (
        val type: Int = 0,
        val id: Long = 0,
        val message: Double = 0.0,
        val country: String = "",
        val sunrise: Long = 0,
        val sunset: Long = 0
)