package ru.andrew._seconds.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.andrew._seconds.user.UserRepository;

import static org.springframework.http.ResponseEntity.ok;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final TokenService tokenService;

    @Autowired
    public AuthService(UserRepository userRepository, TokenRepository tokenRepository, TokenService tokenService) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.tokenService = tokenService;
    }

    public ResponseEntity<?> registerUser(String username, String password) {

        // validation of registration data
        if (userRepository.existsByUsername(username)) {
            return ResponseEntity.badRequest().body("User with this username already exists");
        }

        if (password.length() < 8) {
            return ResponseEntity.badRequest().body("Password must be at least 8 characters long");
        }

        if (username.length() < 7) {
            return ResponseEntity.badRequest().body("Username must be at least 7 characters long");
        }

        // create user


        return ResponseEntity.ok("User registered");
    }

    public ResponseEntity<?> loginUser() {
        // check user and pass / restrict (!check token!)
    }

}
