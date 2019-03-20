package com.weather.weather

data class Rain (
        val `1h`: Double = 0.0,
        val `3h`: Double = 0.0,
        val one_hour: Double = `1h`,
        val three_hour: Double = `3h`
)