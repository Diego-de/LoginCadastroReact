package com.project.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.login.domain.User;



public interface UserRepository extends JpaRepository<User,Long> {

    User save(User user);
    Optional<User> findByEmail(String email);
}
