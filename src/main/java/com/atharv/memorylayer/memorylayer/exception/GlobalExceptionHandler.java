package com.atharv.memorylayer.memorylayer.exception;

import java.net.PortUnreachableException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(SessionNotFoundException.class)
    public ResponseEntity<String> handleSessionNotFound(SessionNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(MemoryBlockNotFoundException.class)
    public ResponseEntity<String> handleMemoryBlockNotFound(MemoryBlockNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(NoAiResponseException.class)
    public ResponseEntity<String> handleNoAiResponseException(NoAiResponseException ex) {
        return ResponseEntity.status(HttpStatus.GATEWAY_TIMEOUT).body(ex.getMessage());
    }

}
