package com.backend.monitor.schedule;

import com.backend.monitor.entity.Notification;
import com.backend.monitor.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NotificationScheduler {

    @Autowired
    NotificationService noteService;

    @Autowired
    private SimpMessagingTemplate template;

    @Scheduled(fixedRate = 5000)
    public void pollNotifications() {
        List<Notification> unreadNotifications = noteService.getUnreadNotifications();
    }
}
