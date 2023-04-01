package com.project.login.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class UserCors implements WebMvcConfigurer {
   
    @Override
    public void addCorsMappings(CorsRegistry users) {
        users.addMapping("/users").allowedOrigins("http://localhost:3000").allowedMethods(
            "GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT"
        );
    }
}
