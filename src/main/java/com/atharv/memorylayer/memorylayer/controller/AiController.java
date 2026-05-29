package com.atharv.memorylayer.memorylayer.controller;

import com.atharv.memorylayer.memorylayer.dto.AvailableProviders;
import com.atharv.memorylayer.memorylayer.service.AiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ai")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    @GetMapping("/providers")
    public AvailableProviders getAvailableAiProviders() {
        return new AvailableProviders(aiService.getAvailableAiProviders());
    }


}
