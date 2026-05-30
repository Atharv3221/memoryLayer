import React, { useState, useRef, useEffect } from 'react'
import type { Provider } from '../../types'
import { PROVIDERS } from '../../data'
import styles from './ProviderSelector.module.css'

interface ProviderSelectorProps {
  current: Provider
  onSelect: (id: string) => void
}

export default function ProviderSelector({ current, onSelect }: ProviderSelectorProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (id: string) => {
    onSelect(id)
    setOpen(false)
  }

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={`${styles.btn} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className={styles.dot} style={{ background: current.color }} />
        <span>{current.name}</span>
        <span className={styles.arrow}>▾</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.dropHead}>Provider</div>
          {PROVIDERS.map(p => (
            <div
              key={p.id}
              className={`${styles.item} ${p.id === current.id ? styles.selected : ''}`}
              onClick={() => handleSelect(p.id)}
            >
              <span className={styles.dot} style={{ background: p.color }} />
              <span className={styles.itemName}>{p.name}</span>
              {p.id === current.id && <span className={styles.check}>✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
