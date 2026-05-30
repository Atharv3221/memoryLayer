import type { Provider, Project, ChatMessage, TimelineEvent, MemoryItem, MemoryStat } from '../types'

export const PROVIDERS: Provider[] = [
  { id: 'anthropic', name: 'Anthropic', color: '#e07b3a', models: ['Claude Sonnet 4.5', 'Claude Opus 4', 'Claude Haiku 4'] },
  { id: 'openai',    name: 'OpenAI',    color: '#74AA9C', models: ['GPT-5', 'GPT-5 Mini', 'GPT-4.1'] },
  { id: 'google',    name: 'Google',    color: '#4285F4', models: ['Gemini 2.5 Pro', 'Gemini 2.5 Flash', 'Gemini 2.5 Flash Lite'] },
  { id: 'deepseek',  name: 'DeepSeek',  color: '#6366F1', models: ['DeepSeek V3', 'DeepSeek R1'] },
  { id: 'groq',      name: 'Groq',      color: '#F97316', models: ['Llama 4 Maverick', 'Llama 4 Scout'] },
  { id: 'mistral',   name: 'Mistral',   color: '#EF4444', models: ['Mistral Large', 'Mixtral 8x22B'] },
]

export const PROJECTS: Project[] = [
  { id: '1', name: 'AI Agent Platform',   memories: 12, tokens: '47K', provider: 'Anthropic', providerColor: '#e07b3a', tags: ['TypeScript', 'Redis'],    progress: 78, updatedAt: '2h ago',      active: true },
  { id: '2', name: 'E-Commerce Rewrite',  memories: 8,  tokens: '21K', provider: 'OpenAI',    providerColor: '#74AA9C', tags: ['React', 'Postgres'],      progress: 45, updatedAt: 'Yesterday' },
  { id: '3', name: 'ML Pipeline',         memories: 5,  tokens: '14K', provider: 'Google',    providerColor: '#4285F4', tags: ['Python', 'PyTorch'],      progress: 30, updatedAt: '3 days ago' },
  { id: '4', name: 'Mobile App',          memories: 3,  tokens: '9K',  provider: 'Groq',      providerColor: '#F97316', tags: ['React Native', 'Expo'],   progress: 15, updatedAt: 'Last week' },
]

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello — I'm connected to your <strong>AI Agent Platform</strong> context. I have <code>12 memories</code> including your microservices decision and the Redis auth issue. How can I help?",
    timestamp: new Date(),
    provider: 'Anthropic',
    model: 'Claude Sonnet 4.5',
  },
  {
    id: '2',
    role: 'user',
    content: "I was working on the auth system. We had a JWT refresh issue with Redis. Continue from where we left off?",
    timestamp: new Date(),
  },
  {
    id: '3',
    role: 'assistant',
    content: "Of course. The issue was an unclosed Redis subscriber in <code>refreshToken.ts</code>. The fix: call <code>sub.quit()</code> in the cleanup handler. You were also considering ioredis cluster mode. Want me to show the corrected implementation?",
    timestamp: new Date(),
    provider: 'Anthropic',
    model: 'Claude Sonnet 4.5',
  },
]

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: '1', icon: '↔', type: 'Switch',   event: 'Switched to Anthropic',       detail: '25 memories carried over — zero re-prompting needed',               time: '2 min ago',  chips: ['Provider'] },
  { id: '2', icon: '⬡', type: 'Memory',   event: 'Architecture decision saved',  detail: 'Microservices over monolith — scalability, independent deploys',    time: '18 min ago', chips: ['Architecture'] },
  { id: '3', icon: '×', type: 'Failed',   event: 'Failed attempt logged',        detail: 'JWT/Redis memory leak — ioredis subscriber not cleaned up',         time: '1 hr ago',   chips: ['Auth', 'Bug'] },
  { id: '4', icon: '◎', type: 'Chat',     event: 'Session resumed',              detail: 'Continued auth design — AI recalled 8 prior context nodes',         time: '2 hrs ago',  chips: ['Chat'] },
  { id: '5', icon: '▪', type: 'Memory',   event: 'Requirement added',            detail: 'SAML 2.0 SSO support — added to constraint memory',                 time: '5 hrs ago',  chips: ['Req'] },
  { id: '6', icon: '◈', type: 'Snapshot', event: 'Context snapshot',             detail: 'Initial snapshot — stack, goals, constraints captured',             time: 'Yesterday',  chips: ['Snapshot'] },
]

export const MEMORY_STATS: MemoryStat[] = [
  { label: 'Architecture',     value: '8',  sub: 'decisions',     bar: 80, color: '#4285F4' },
  { label: 'AI responses',     value: '47', sub: 'conversations',  bar: 95, color: '#6366F1' },
  { label: 'Failed attempts',  value: '6',  sub: 'logged',         bar: 24, color: '#888' },
  { label: 'Requirements',     value: '14', sub: 'constraints',    bar: 60, color: '#3d8b5c' },
  { label: 'Preferences',      value: '9',  sub: 'user prefs',     bar: 45, color: '#e07b3a' },
  { label: 'Tech constraints', value: '11', sub: 'items',          bar: 55, color: '#74AA9C' },
]

export const MEMORY_ITEMS: MemoryItem[] = [
  { id: '1', label: 'Architecture decisions', sub: 'Microservices, DB schema, API design', count: '8',  trend: '+2' },
  { id: '2', label: 'Previous AI responses',  sub: 'Full conversation history',            count: '47', trend: '+12' },
  { id: '3', label: 'Failed attempts',        sub: 'Redis, GraphQL N+1, CORS',             count: '6',  trend: '' },
  { id: '4', label: 'Requirements',           sub: 'Functional & non-functional specs',    count: '14', trend: '+1' },
  { id: '5', label: 'User preferences',       sub: 'Code style, verbosity, format',        count: '9',  trend: '' },
  { id: '6', label: 'Technical constraints',  sub: 'SAML SSO, SOC2, <200ms p99',           count: '11', trend: '+3' },
]
