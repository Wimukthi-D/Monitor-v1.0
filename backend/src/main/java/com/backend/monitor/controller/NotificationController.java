package com.backend.monitor.controller;

import com.backend.monitor.entity.Notification;
import com.backend.monitor.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    NotificationService noteService;

    @GetMapping("/all")
    public List<Notification> getAllNotifications(){
        return noteService.getAllNotifications();
    }

    @GetMapping("/unread")
    public List<Notification> getUnreadNotifications(){
        return noteService.getUnreadNotifications();
    }

    @PutMapping("/markAsRead/{id}")
    public void markAsRead(@PathVariable long id){
        noteService.markAsRead(id);
    }

}
