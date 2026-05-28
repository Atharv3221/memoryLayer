package com.atharv.memorylayer.memorylayer.repository;

import com.atharv.memorylayer.memorylayer.entity.memory.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatSessionRepository extends
        JpaRepository<ChatSession, Long> {
}
