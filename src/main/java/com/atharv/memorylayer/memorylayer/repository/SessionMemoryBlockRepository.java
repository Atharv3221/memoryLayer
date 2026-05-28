package com.atharv.memorylayer.memorylayer.repository;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.memory.SessionMemoryBlock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionMemoryBlockRepository extends
        JpaRepository<SessionMemoryBlock, Long> {

    List<SessionMemoryBlock> findBySessionIdOrderByIdAsc(long sessionId);
}
