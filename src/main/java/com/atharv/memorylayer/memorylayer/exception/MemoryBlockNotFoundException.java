package com.atharv.memorylayer.memorylayer.exception;

public class MemoryBlockNotFoundException extends RuntimeException {
    public MemoryBlockNotFoundException(long id) {
        super("Memory block not found " + id);
    }
}
