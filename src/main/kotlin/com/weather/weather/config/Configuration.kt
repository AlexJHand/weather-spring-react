package com.weather.weather.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
data class Configuration {
    @Value("\${secret.api.id}") val id: String
}