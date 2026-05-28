package com.atharv.memorylayer.memorylayer.entity.memory;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SessionMemoryBlock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private EntryType entryType;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;

    private long sessionId;

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public long getSessionId() {
        return sessionId;
    }
}
