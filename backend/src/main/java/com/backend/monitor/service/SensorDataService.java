package com.backend.monitor.service;

import com.backend.monitor.entity.SensorData;
import com.backend.monitor.repository.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

@Service
public class SensorDataService {

    @Autowired
    SensorDataRepository sdRepo;

    @Autowired
    private SimpMessagingTemplate template;

    @Autowired
    EmailService emailService;

    public List<SensorData> saveData(SensorData sds) {
        try {
            sdRepo.save(sds);
            List<SensorData> dataList = sdRepo.findLatestData(PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "id"))).reversed();

            template.convertAndSend("/topic/sensor-data", dataList);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<SensorData> getAllValues() {
        return sdRepo.findAll();
    }

    public String sendEmail(long id) {
        Optional<SensorData> sensorData = sdRepo.findById(id);

        Date newDate = null;
        Time newTime = null;
        BigDecimal temp = null;
        String emailTo = "achila877@gmail.com";

        try {
            if (sensorData.isPresent()) {
                SensorData sd = sensorData.get();
                newDate = sd.getDate();
                newTime = Time.valueOf(sd.getTime());
                temp = sd.getTemperature();
                return emailService.sendEmai(emailTo, temp, newDate, newTime);
            } else return "Email not sent!";
        }catch (Exception e){
            return "Email not Sent!";
        }
    }
}
