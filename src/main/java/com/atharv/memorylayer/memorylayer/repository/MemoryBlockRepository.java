package com.atharv.memorylayer.memorylayer.repository;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.memory.MemoryBlock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoryBlockRepository extends JpaRepository<MemoryBlock, Long> {
    List<MemoryBlock> findBySessionId(long sessionId);

    void deleteBySessionId(long sessionId);
}
