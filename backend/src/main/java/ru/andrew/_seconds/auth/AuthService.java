package ru.andrew._seconds.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.andrew._seconds.user.UserRepository;

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

    public ResponseEntity<?> registerUser() {
        // validate and pass / restrict user (!check token!)
    }

    public ResponseEntity<?> loginUser() {
        // check user and pass / restrict (!check token!)
    }

}
