package com.backend.monitor.controller;

import com.backend.monitor.dto.AuthDTO;
import com.backend.monitor.service.MonitorUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class MonitorUserController {

    @Autowired
    MonitorUserService monitorUserService;

    @PostMapping("/auth")
    public AuthDTO authenticate(
            @RequestParam("username") String username,
            @RequestParam("password") String password)
    {
        return monitorUserService.authenticate(username,password);
    }
}
