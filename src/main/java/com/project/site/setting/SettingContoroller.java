package com.project.site.setting;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class SettingContoroller {

    @RequestMapping(value="/setting")
    public String login (HttpServletRequest request , HttpServletResponse response ) {
        
        return "thymeleaf/setting";
    }
    
}
