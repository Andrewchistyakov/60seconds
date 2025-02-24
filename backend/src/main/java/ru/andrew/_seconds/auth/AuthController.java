package ru.andrew._seconds.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUserHandler(
            @RequestBody String username,
            @RequestBody String password
    ) {
        return authService.registerUser(username, password);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUserHandler() {
        return authService.loginUser();
    }
}
