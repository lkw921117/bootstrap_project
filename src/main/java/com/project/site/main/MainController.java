package com.project.site.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MainController {

    @GetMapping("/")
    public String mainHtml (HttpServletRequest request , HttpServletResponse response){

        return "thymeleaf/login";
    }

    @RequestMapping("/dashboard")
    public String dashboard (HttpServletRequest request , HttpServletResponse response){

        return "thymeleaf/dashboard";
    }

}
