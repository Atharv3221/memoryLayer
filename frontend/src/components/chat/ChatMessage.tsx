import React from 'react'
import type { ChatMessage as ChatMessageType } from '../../types'
import styles from './ChatMessage.module.css'

interface ChatMessageProps {
  message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`${styles.msg} ${isUser ? styles.user : ''}`}>
      <div className={`${styles.avatar} ${isUser ? styles.userAv : styles.aiAv}`}>
        {isUser ? 'U' : 'C'}
      </div>
      <div className={styles.body}>
        <div
          className={styles.bubble}
          dangerouslySetInnerHTML={{ __html: message.content }}
        />
        <div className={styles.meta}>
          {isUser
            ? 'You'
            : `${message.provider ?? 'AI'} · ${message.model ?? ''}`}
        </div>
      </div>
    </div>
  )
}
