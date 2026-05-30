import React, { useRef, useState, useCallback } from 'react'
import type { Provider } from '../../types'
import ProviderSelector from './ProviderSelector'
import ModelSelector from './ModelSelector'
import styles from './ChatComposer.module.css'

interface ChatComposerProps {
  provider: Provider
  model: string
  onSelectProvider: (id: string) => void
  onSelectModel: (model: string) => void
  onSend: (text: string) => void
}

export default function ChatComposer({
  provider,
  model,
  onSelectProvider,
  onSelectModel,
  onSend,
}: ChatComposerProps) {
  const [value, setValue] = useState('')
  const [voice, setVoice] = useState(false)
  const taRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    const ta = taRef.current
    if (ta) {
      ta.style.height = 'auto'
      ta.style.height = Math.min(ta.scrollHeight, 100) + 'px'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  const submit = useCallback(() => {
    if (!value.trim()) return
    onSend(value.trim())
    setValue('')
    if (taRef.current) taRef.current.style.height = 'auto'
  }, [value, onSend])

  return (
    <div className={styles.wrap}>
      <div className={styles.composer}>
        <div className={styles.taRow}>
          <textarea
            ref={taRef}
            className={styles.ta}
            value={value}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything — context preserved…"
            rows={1}
          />
        </div>
        <div className={styles.bar}>
          <div className={styles.barLeft}>
            <button className={styles.iconBtn} title="Attach file" aria-label="Attach file">
              ⊕
            </button>
            <ProviderSelector current={provider} onSelect={onSelectProvider} />
            <ModelSelector provider={provider} current={model} onSelect={onSelectModel} />
            <button
              className={`${styles.iconBtn} ${voice ? styles.voiceActive : ''}`}
              title="Voice"
              aria-label="Voice input"
              onClick={() => setVoice(v => !v)}
            >
              ♪
            </button>
          </div>
          <div className={styles.barRight}>
            <span className={styles.kbd}>⌘↵</span>
            <button className={styles.sendBtn} onClick={submit} aria-label="Send">
              ↑
            </button>
          </div>
        </div>
      </div>
      <p className={styles.hint}>Context preserved across providers · 12 memories active</p>
    </div>
  )
}
