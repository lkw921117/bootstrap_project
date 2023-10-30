package com.project.site.pay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class PayContoroller {
    
    @RequestMapping(value="/pay")
    public String login (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/pay";
    }
}
