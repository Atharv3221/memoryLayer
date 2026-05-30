# ContextAI — Minimal AI Context Management Platform

A clean, dark-theme React + TypeScript frontend for managing AI context across multiple providers.

## Stack

- React 18
- TypeScript 5
- Vite 5
- CSS Modules (zero external UI deps)

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Project structure

```
src/
├── components/
│   ├── layout/
│   │   ├── MainLayout.tsx      # Root layout — sidebar + topbar + view routing
│   │   ├── Sidebar.tsx         # Collapsible left nav
│   │   └── Topbar.tsx          # Breadcrumb + status bar
│   │
│   ├── hero/
│   │   └── HeroSection.tsx     # Landing hero + project grid
│   │
│   ├── chat/
│   │   ├── ChatComposer.tsx    # Floating input with provider/model selectors
│   │   ├── ChatMessage.tsx     # Single message bubble
│   │   ├── ChatWindow.tsx      # Scrollable message list + typing indicator
│   │   ├── ProviderSelector.tsx
│   │   └── ModelSelector.tsx
│   │
│   ├── context/
│   │   ├── ContextTimeline.tsx # Filterable event timeline
│   │   ├── MemoryCard.tsx      # Single stat card
│   │   └── MemoryInsights.tsx  # Full memory panel
│   │
│   └── projects/
│       └── ProjectCard.tsx     # Project summary card
│
├── data/index.ts               # All mock data
├── hooks/useAppState.ts        # Central app state
├── types/index.ts              # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css                   # CSS custom properties (design tokens)
```

## Design tokens (index.css)

| Token  | Value                       | Usage        |
|--------|-----------------------------|--------------|
| --bg   | #0c0c0c                     | Page bg      |
| --s1   | #111111                     | Sidebar, topbar |
| --s2   | #161616                     | Cards, inputs |
| --s3   | #1c1c1c                     | Bars, avatars |
| --b1   | rgba(255,255,255,0.07)      | Default border |
| --b2   | rgba(255,255,255,0.11)      | Hover border  |
| --t1   | #f0f0f0                     | Primary text  |
| --t2   | #888888                     | Secondary text |
| --t3   | #555555                     | Muted text    |
| --ac   | #e07b3a                     | Accent (orange) |
| --ac2  | rgba(224,123,58,0.12)       | Accent bg tint |

## Providers supported

- Anthropic (Claude Sonnet 4.5, Opus 4, Haiku 4)
- OpenAI (GPT-5, GPT-5 Mini, GPT-4.1)
- Google (Gemini 2.5 Pro/Flash/Flash Lite)
- DeepSeek (V3, R1)
- Groq (Llama 4 Maverick, Scout)
- Mistral (Large, Mixtral 8x22B)
