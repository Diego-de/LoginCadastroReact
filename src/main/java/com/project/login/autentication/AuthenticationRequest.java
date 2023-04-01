package com.project.login.autentication;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AuthenticationRequest{
    
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    
}
