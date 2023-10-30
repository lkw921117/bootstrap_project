package com.project.site.login.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;


@Controller
@RequiredArgsConstructor
public class LoginController {

    @PostMapping(value="/login")
    public String login (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/dashboard";
    }
    
    
}
