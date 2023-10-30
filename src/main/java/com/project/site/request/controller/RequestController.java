package com.project.site.request.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class RequestController {
    @RequestMapping(value="/request")
    public String login (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/request";
    }
}
