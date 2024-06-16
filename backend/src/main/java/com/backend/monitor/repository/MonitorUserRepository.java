package com.backend.monitor.repository;

import com.backend.monitor.entity.MonitorUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MonitorUserRepository extends JpaRepository<MonitorUser,Integer> {

    List<MonitorUser> findByUsername(String username);
}
