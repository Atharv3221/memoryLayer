package com.atharv.memorylayer.memorylayer.service;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.memory.ChatSession;
import com.atharv.memorylayer.memorylayer.entity.memory.MemoryBlock;
import com.atharv.memorylayer.memorylayer.entity.memory.SessionMemoryBlock;
import com.atharv.memorylayer.memorylayer.exception.MemoryBlockNotFoundException;
import com.atharv.memorylayer.memorylayer.exception.SessionNotFoundException;
import com.atharv.memorylayer.memorylayer.repository.ChatSessionRepository;
import com.atharv.memorylayer.memorylayer.repository.MemoryBlockRepository;
import com.atharv.memorylayer.memorylayer.repository.SessionMemoryBlockRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class MemoryService {

    final private ChatSessionRepository chatSessionRepository;

    final private SessionMemoryBlockRepository sessionMemoryBlockRepository;

    final private MemoryBlockRepository memoryBlockRepository;

    public MemoryService(ChatSessionRepository chatSessionRepository,
                         SessionMemoryBlockRepository sessionMemoryBlockRepository,
                         MemoryBlockRepository memoryBlockRepository) {
        this.chatSessionRepository = chatSessionRepository;
        this.sessionMemoryBlockRepository = sessionMemoryBlockRepository;
        this.memoryBlockRepository = memoryBlockRepository;
    }

    public List<ChatSession> getAllChatSessions() {
        return chatSessionRepository
                .findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    public List<SessionMemoryBlock> getSessionMemory(long sessionId) {
        return sessionMemoryBlockRepository.findBySessionIdOrderByIdAsc(sessionId);
    }


    public List<MemoryBlock> getMemoryBlocks(long sessionId) {
        return memoryBlockRepository.findBySessionId(sessionId);
    }

    public void deleteChatSession(long sessionId) {
        if (!chatSessionRepository.existsById(sessionId)) {
            throw new SessionNotFoundException(sessionId);
        }
        deleteMemoryBlocksForSession(sessionId);
        chatSessionRepository.deleteById(sessionId);
    }

    public void deleteMemoryBlock(long id) {
        if (!memoryBlockRepository.existsById(id)) {
            throw new MemoryBlockNotFoundException(id);
        }
        memoryBlockRepository.deleteById(id);
    }

    public void deleteMemoryBlocksForSession(long sessionId) {
        memoryBlockRepository.deleteBySessionId(sessionId);
    }

}
