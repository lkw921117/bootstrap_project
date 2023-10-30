package com.project.site.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class MemberContoroller {
    @RequestMapping(value="/member")
    public String login (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/member";
    }
}
