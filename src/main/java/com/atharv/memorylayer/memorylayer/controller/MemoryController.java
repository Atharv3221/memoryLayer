package com.atharv.memorylayer.memorylayer.controller;

import java.util.List;

import com.atharv.memorylayer.memorylayer.dto.SessionData;
import com.atharv.memorylayer.memorylayer.entity.memory.ChatSession;
import com.atharv.memorylayer.memorylayer.service.MemoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/memory")
public class MemoryController {

    final private MemoryService memoryService;

    public MemoryController(MemoryService memoryService) {
        this.memoryService = memoryService;
    }

    @GetMapping("/sessions/all")
    public List<ChatSession> getChatSessions() {
        return memoryService.getAllChatSessions();
    }

    @GetMapping("/session/{id}")
    public SessionData getSessionData(@PathVariable long id) {
        SessionData sessionData = new SessionData();
        sessionData.
                setSessionMemoryBlocks(memoryService.
                        getSessionMemory(id)
                );
        sessionData.setMemoryBlock(
                memoryService.getMemoryBlocks(id)
        );
        return  sessionData;
    }

    @DeleteMapping("/session/{id}")
    public ResponseEntity<String> deleteSession(@PathVariable long id) {
        memoryService.deleteChatSession(id);
        return ResponseEntity.ok("Session deleted successfully " + id);
    }

    @DeleteMapping("/session/memory/{id}")
    public ResponseEntity<String> deleteMemoryBlock(@PathVariable long id) {
        memoryService.deleteMemoryBlock(id);
        return ResponseEntity.ok("MemoryBlock deleted successfully " + id);
    }

}
