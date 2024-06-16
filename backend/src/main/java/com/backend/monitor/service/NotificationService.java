package com.backend.monitor.service;

import com.backend.monitor.entity.Notification;
import com.backend.monitor.repository.NotificationRepository;
                                                                                                        import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    @Autowired
    NotificationRepository noteRepo;

    @Autowired
    private SimpMessagingTemplate template;

    public List<Notification> getUnreadNotifications(){
        List<Notification> noteList =  noteRepo.findByIsReadFalse();

        if (noteList != null) {
            if (!noteList.isEmpty()) {
                noteList.forEach(notification -> {
                    System.out.println(notification);
                    template.convertAndSend("/topic/notifications", notification);

                    //String msg=STR."Please be advised of a high temperature warning recorded at \{notification.getTempValue()} on \{notification.getDateReceived()} at \{notification.getTimeReceived()}  ";
                });
            }
        }

//        if(!noteList.isEmpty()){
//            for (Notification note : noteList){
//                //System.out.println(STR."\{note.getNotification()} - \{note.getTempValue()} C");
//                //note.setRead(true);
//                //noteRepo.save(note);
//            }
//        }
        return null;
    }

    public List<Notification> getAllNotifications(){
        return noteRepo.findAll();
    }

    public void markAsRead(long id) {
        Optional<Notification> existingNote = noteRepo.findById(id);
        if(existingNote.isPresent()){
            Notification note=existingNote.get();
            note.setRead(true);
            noteRepo.save(note);
        }
    }
}
