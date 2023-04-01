package com.project.login;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.project.login.domain.User;
import com.project.login.repository.UserRepository;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;;


@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
class LoginApplicationTests {

	@Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;  

	@Test
    public void testGetUserById() throws Exception {
        User user = new User(1, "johndoe@example.com", "password123");
        user = userRepository.save(user);

        mockMvc.perform(get("/users/" + user.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("johndoe@example.com"))
                .andExpect(jsonPath("$.password").value("password123"));
    }

}
