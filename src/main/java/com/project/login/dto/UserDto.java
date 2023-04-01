package com.project.login.dto;

import javax.validation.constraints.NotNull;
import com.project.login.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {


    @NotNull
    private String email;

    @NotNull
    private String password;

    public UserDto(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
    }
}
