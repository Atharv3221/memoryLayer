import React, { useState, useRef, useEffect } from 'react'
import type { Provider } from '../../types'
import styles from './ProviderSelector.module.css'

interface ModelSelectorProps {
  provider: Provider
  current: string
  onSelect: (model: string) => void
}

export default function ModelSelector({ provider, current, onSelect }: ModelSelectorProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (model: string) => {
    onSelect(model)
    setOpen(false)
  }

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={`${styles.btn} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span>{current}</span>
        <span className={styles.arrow}>▾</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.dropHead}>Model</div>
          {provider.models.map(m => (
            <div
              key={m}
              className={`${styles.item} ${m === current ? styles.selected : ''}`}
              onClick={() => handleSelect(m)}
            >
              <span className={styles.itemName}>{m}</span>
              {m === current && <span className={styles.check}>✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
