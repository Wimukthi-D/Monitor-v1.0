package com.backend.monitor.schedule;

import com.backend.monitor.entity.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataReadingScheduler {

//    @Scheduled(fixedRate = 5)
//    public void pollNotifications() {
//        List<Notification> unreadNotifications = noteService.getUnreadNotifications();
//    }
}
