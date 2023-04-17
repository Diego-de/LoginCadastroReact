package com.project.login.controller;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.login.DTO.MemberDto;
import com.project.login.domain.User;
import com.project.login.repository.UserRepository;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class UserController {
    

    final UserRepository memberRepository;
    final PasswordEncoder encode;
    

    // Endpoint para registro de usuário
    @PostMapping("/api/cadastrar")
    public String saveMember(@RequestBody MemberDto memberDto) {
        memberRepository.save(User.createMember(memberDto.getEmail(), encode.encode(memberDto.getPassword())));
        return "success";
    }


 

}
