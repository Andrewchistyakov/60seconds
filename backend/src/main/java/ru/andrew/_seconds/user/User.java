package ru.andrew._seconds.user;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private final UUID id;

    @Column(name = "nickname")
    private final String nickname;

    @Column(name = "password")
    private final String passwordEncrypted; // ?
}
