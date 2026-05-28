package com.atharv.memorylayer.memorylayer.dto;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.memory.MemoryBlock;
import com.atharv.memorylayer.memorylayer.entity.memory.SessionMemoryBlock;

public class SessionData {
    private List<SessionMemoryBlock> sessionMemoryBlocks;

    private List<MemoryBlock> memoryBlocks;

    public List<MemoryBlock> getMemoryBlock() {
        return memoryBlocks;
    }

    public void setMemoryBlock(List<MemoryBlock> memoryBlock) {
        this.memoryBlocks = memoryBlock;
    }

    public List<SessionMemoryBlock> getSessionMemoryBlocks() {
        return sessionMemoryBlocks;
    }

    public void setSessionMemoryBlocks(List<SessionMemoryBlock> sessionMemoryBlocks) {
        this.sessionMemoryBlocks = sessionMemoryBlocks;
    }
}
