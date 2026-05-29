package com.atharv.memorylayer.memorylayer.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

import com.atharv.memorylayer.memorylayer.entity.ai.SupportedAi;
import com.atharv.memorylayer.memorylayer.exception.NoAiResponseException;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiService {

    @Value("${spring.ai.openai.api-key:}")
    private String openAiApiKey;

    @Value("${spring.ai.anthropic.api-key:}")
    private String anthropicApiKey;

    @Value("${spring.ai.google.api-key:}")
    private String googleAiApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public List<String> getSupportedAiModel(SupportedAi supportedAi) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + openAiApiKey);

        HttpEntity<String> request = new HttpEntity<>(headers);
        ResponseEntity<JsonNode> response = restTemplate.exchange(
                "https://api.openai.com/v1/models",
                HttpMethod.GET,
                request,
                JsonNode.class
        );

        if (response.getBody() == null) {
            throw new NoAiResponseException("OpenAi");
        }
        return StreamSupport
                .stream(response.getBody().get("data").spliterator(), false)
                .map(node -> node.get("id").asText())
                .sorted()
                .toList();
    }

    public List<SupportedAi> getAvailableAiProviders() {
        List<SupportedAi> providers = new ArrayList<>();
        if (!openAiApiKey.isEmpty()) {
            providers.add(SupportedAi.OPENAI);
        }
        if (!anthropicApiKey.isEmpty()) {
            providers.add(SupportedAi.ANTHROPIC);
        }
        if (!googleAiApiKey.isEmpty()) {
            providers.add(SupportedAi.GOOGLE);
        }
        return providers;
    }
}
