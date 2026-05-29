package com.atharv.memorylayer.memorylayer.entity.ai;

/**
 * Represents supported Ai providers.
 */
public enum SupportedAi {
    OPENAI("https://api.openai.com/v1/models"),
    ANTHROPIC("https://api.anthropic.com/v1/models"),
    GOOGLE("https://generativelanguage.googleapis.com/v1beta/models?pageSize=50");

    private final String modelListUrl;

    SupportedAi(String modelListUrl) {
        this.modelListUrl = modelListUrl;
    }

    public String getModelListUrl() {
        return modelListUrl;
    }
}
