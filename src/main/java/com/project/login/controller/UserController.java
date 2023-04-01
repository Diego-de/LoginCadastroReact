package com.project.login.controller;
import javax.validation.Valid;

import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.login.autentication.AuthenticationResponse;
import com.project.login.autentication.JwtTokenUtil;
import com.project.login.domain.User;
import com.project.login.dto.LoginDto;
import com.project.login.dto.UserDto;
import com.project.login.repository.UserRepository;
import com.project.login.service.CustomUserDetail;
import com.project.login.service.UserService;



@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {


    private static final Logger logger = Logger.getLogger(UserController.class.getName());

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService Userservice;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
        

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> ResponseEntity.ok().body(user))
                .orElse(ResponseEntity.notFound().build());
    }

    
    @PostMapping("/signup")
    public ResponseEntity<UserDto> createUser(@RequestBody @Valid UserDto userDto) {

        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());

        Userservice.createUser(user);

        return ResponseEntity.ok().body(new UserDto(user));
    }


    
    @PostMapping("/auth")
    public ResponseEntity<?> authenticate(@RequestBody LoginDto loginDto) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid username or password", e);
        }
    
        final CustomUserDetail userDetails = (CustomUserDetail) Userservice.loadUserByUsername(loginDto.getEmail());
        final String jwt = jwtTokenUtil.generateToken(userDetails);

        AuthenticationResponse response = new AuthenticationResponse(jwt);
    
        return ResponseEntity.ok().body(response);
    }

}
