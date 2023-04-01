package com.project.login.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.login.domain.User;
import com.project.login.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User usuario = userRepository.findByEmail(email);
        if (usuario == null) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        return new CustomUserDetail(usuario);
    }

    public User createUser( User user){
       return userRepository.save(user);
    }





    
}
