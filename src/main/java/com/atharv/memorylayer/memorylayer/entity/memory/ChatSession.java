package com.atharv.memorylayer.memorylayer.entity.memory;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.annotation.CreatedBy;

@Entity
public class ChatSession {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    @Enumerated(EnumType.STRING)
    private SessionType sessionType;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private LocalDateTime localDateTime;

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public SessionType getSessionType() {
        return sessionType;
    }

    public void setSessionType(SessionType sessionType) {
        this.sessionType = sessionType;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

}
