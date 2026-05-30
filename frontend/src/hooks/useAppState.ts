import { useState, useCallback } from 'react'
import type { Provider, ChatMessage, ViewId } from '../types'
import { PROVIDERS, INITIAL_MESSAGES } from '../data'

export function useAppState() {
  const [view, setView] = useState<ViewId>('home')
  const [curProvider, setCurProvider] = useState<Provider>(PROVIDERS[0])
  const [curModel, setCurModel] = useState<string>(PROVIDERS[0].models[0])
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)
  const [isTyping, setIsTyping] = useState(false)

  const selectProvider = useCallback((id: string) => {
    const p = PROVIDERS.find(p => p.id === id)
    if (!p) return
    setCurProvider(p)
    setCurModel(p.models[0])
  }, [])

  const selectModel = useCallback((model: string) => {
    setCurModel(model)
  }, [])

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Context from <code>${curProvider.name}</code> loaded. Responding based on your 12 active memories…`,
        timestamp: new Date(),
        provider: curProvider.name,
        model: curModel,
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200)
  }, [curProvider, curModel])

  return {
    view, setView,
    curProvider, curModel,
    selectProvider, selectModel,
    messages, sendMessage, isTyping,
  }
}
