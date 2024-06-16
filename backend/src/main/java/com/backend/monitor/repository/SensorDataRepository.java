package com.backend.monitor.repository;

import com.backend.monitor.entity.SensorData;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SensorDataRepository extends JpaRepository<SensorData,Long> {

    @Query("SELECT s FROM SensorData s ORDER BY s.id DESC")
    List<SensorData> findLatestData(Pageable pageable);
}
