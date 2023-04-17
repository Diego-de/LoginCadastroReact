package com.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.project.login.DTO.JwtRequest;
import com.project.login.DTO.JwtResponse;
import com.project.login.domain.User;
import com.project.login.security.JwtTokenUtil;
import com.project.login.service.JwtUserDetailsService;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class AuthenticationController {
    

@Autowired
private JwtTokenUtil jwtTokenUtil;

@Autowired
private JwtUserDetailsService userDetailsService;



// Endpoint para autenticação com email e senha
@PostMapping("/logar")
public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

    final User member = userDetailsService.authenticateByEmailAndPassword
    (authenticationRequest.getEmail(), authenticationRequest.getPassword());
    final String token = jwtTokenUtil.generateToken(member.getEmail());

    return ResponseEntity.ok(new JwtResponse(token));
}


}
