import React, { useState } from 'react'
import { TIMELINE_EVENTS } from '../../data'
import type { TimelineEvent } from '../../types'
import styles from './ContextTimeline.module.css'

const FILTERS = ['All', 'Switch', 'Memory', 'Failed', 'Chat', 'Snapshot'] as const

export default function ContextTimeline() {
  const [active, setActive] = useState<string>('All')

  const items: TimelineEvent[] =
    active === 'All'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter(e => e.type === active)

  return (
    <div className={styles.wrap}>
      <div className={styles.filters}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filter} ${active === f ? styles.on : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {items.map((item, i) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.track}>
              <div className={styles.icon}>{item.icon}</div>
              {i < items.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.body}>
              <div className={styles.event}>{item.event}</div>
              <div className={styles.detail}>{item.detail}</div>
              <div className={styles.footer}>
                {item.chips.map(c => (
                  <span key={c} className={styles.chip}>{c}</span>
                ))}
                <span className={styles.time}>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
