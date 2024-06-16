package com.backend.monitor.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.repository.NoRepositoryBean;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AuthDTO {

    private String authMsg;

    @JsonProperty("isAuth")
    private boolean isAuth;

    private String username;

    private String role;
}
