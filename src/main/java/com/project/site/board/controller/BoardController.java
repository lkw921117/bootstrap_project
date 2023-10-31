package com.project.site.board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class BoardController {
    
    @RequestMapping(value="/board")
    public String board (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/board";
    }

}
