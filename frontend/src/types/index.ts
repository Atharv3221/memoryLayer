export type ProviderId = 'anthropic' | 'openai' | 'google' | 'deepseek' | 'groq' | 'mistral'

export interface Provider {
  id: ProviderId
  name: string
  color: string
  models: string[]
}

export interface Project {
  id: string
  name: string
  memories: number
  tokens: string
  provider: string
  providerColor: string
  tags: string[]
  progress: number
  updatedAt: string
  active?: boolean
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  provider?: string
  model?: string
}

export interface TimelineEvent {
  id: string
  icon: string
  type: 'Switch' | 'Memory' | 'Failed' | 'Chat' | 'Snapshot'
  event: string
  detail: string
  time: string
  chips: string[]
}

export interface MemoryItem {
  id: string
  label: string
  sub: string
  count: string
  trend: string
}

export interface MemoryStat {
  label: string
  value: string
  sub: string
  bar: number
  color: string
}

export type ViewId = 'home' | 'chat' | 'timeline' | 'memory'
