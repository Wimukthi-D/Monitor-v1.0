package com.backend.monitor.controller;


import com.backend.monitor.entity.SensorData;
import com.backend.monitor.service.SensorDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/sensor-data")
public class SensorDataController {

    @Autowired
    SensorDataService sdService;

    @PostMapping("/saveData")
    public List<SensorData> saveData(@RequestBody SensorData sds) {
        return sdService.saveData(sds);
//        System.out.println(sds);
//        return null;
    }

    @GetMapping("/allValues")
    public List<SensorData> getAllValues(){
        return sdService.getAllValues();
    }

    @PostMapping("/sendEmail/{id}")
    public String sendEmail(@PathVariable long id){
        return sdService.sendEmail(id);
    }
}
