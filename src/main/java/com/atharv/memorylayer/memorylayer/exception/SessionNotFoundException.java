package com.atharv.memorylayer.memorylayer.exception;

public class SessionNotFoundException extends RuntimeException {
    public SessionNotFoundException(long id) {
        super("Session not found " + id);
    }
}
