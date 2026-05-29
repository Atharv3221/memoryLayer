package com.atharv.memorylayer.memorylayer.dto;

import java.util.List;

import com.atharv.memorylayer.memorylayer.entity.ai.SupportedAi;

/**
 * Represents list available Ai providers.
 * @param availableProviders
 */
public record AvailableProviders(List<SupportedAi> availableProviders) {
}
