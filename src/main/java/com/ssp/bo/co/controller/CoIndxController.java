package com.ssp.bo.co.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CoIndxController {

    @RequestMapping(value = "/index")
    public ModelAndView index() throws Exception {
        try {
            ModelAndView ret = new ModelAndView();
            ret.setViewName("/index");
            return ret;
        } catch(Exception e) {
            
        }
        return null;
    }
}
