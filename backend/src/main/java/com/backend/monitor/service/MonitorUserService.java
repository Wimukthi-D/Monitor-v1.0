package com.backend.monitor.service;

import com.backend.monitor.dto.AuthDTO;
import com.backend.monitor.entity.MonitorUser;
import com.backend.monitor.repository.MonitorUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class MonitorUserService {

    @Autowired
    MonitorUserRepository monitorUserRepository;

    public AuthDTO authenticate(String username, String password) {
        try {
            List<MonitorUser> exUser = monitorUserRepository.findByUsername(username);
            if (!exUser.isEmpty()) {
                for (MonitorUser u : exUser) {
                    if (Objects.equals(u.getPassword(), password)) {
                        return new AuthDTO("Authenticated",true, u.getUsername(), u.getRole());
                    }
                }
                return new AuthDTO("Incorrect Password!", false, null, null);
            } else return new AuthDTO("Incorrect Username!",false, null, null);
        }catch (Exception e){
            return new AuthDTO("Authentication error!",false, null, null);
        }
    }
}
