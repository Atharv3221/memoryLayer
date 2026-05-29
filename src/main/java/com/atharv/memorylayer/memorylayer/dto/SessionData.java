package com.atharv.memorylayer.memorylayer.dto;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.memory.MemoryBlock;
import com.atharv.memorylayer.memorylayer.entity.memory.SessionMemoryBlock;

public record SessionData(
        List<SessionMemoryBlock> sessionMemoryBlocks,
        List<MemoryBlock> memoryBlocks
) {}

