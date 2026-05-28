package com.atharv.memorylayer.memorylayer.exception;

public class NoAiResponseException extends RuntimeException {
    public NoAiResponseException(String ai) {
        super("No from " + ai  + " response");
    }
}
