import React, { useEffect, useRef } from 'react'
import type { ChatMessage as ChatMessageType } from '../../types'
import ChatMessage from './ChatMessage'
import styles from './ChatWindow.module.css'

interface ChatWindowProps {
  messages: ChatMessageType[]
  isTyping: boolean
  providerName: string
}

export default function ChatWindow({ messages, isTyping, providerName }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  return (
    <div className={styles.window}>
      {messages.map(m => (
        <ChatMessage key={m.id} message={m} />
      ))}

      {isTyping && (
        <div className={styles.typing}>
          <div className={`${styles.avatar} ${styles.aiAv}`}>C</div>
          <div className={styles.typingBubble}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}
