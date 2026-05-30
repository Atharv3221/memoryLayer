import React from 'react'
import { MEMORY_STATS, MEMORY_ITEMS } from '../../data'
import MemoryCard from './MemoryCard'
import styles from './MemoryInsights.module.css'

export default function MemoryInsights() {
  return (
    <div className={styles.wrap}>
      {/* Health + Sync row */}
      <div className={styles.topRow}>
        <div className={styles.healthCard}>
          <div className={styles.ring}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="17" fill="none" stroke="var(--s3)" strokeWidth="4" />
              <circle
                cx="22" cy="22" r="17" fill="none"
                stroke="var(--ac)" strokeWidth="4"
                strokeDasharray="106.8"
                strokeDashoffset="6.4"
                strokeLinecap="round"
                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              />
            </svg>
            <div className={styles.ringNum}>94</div>
          </div>
          <div className={styles.healthInfo}>
            <div className={styles.healthTitle}>Memory health</div>
            <div className={styles.healthSub}>All systems synced</div>
          </div>
        </div>

        <div className={styles.syncCard}>
          <div className={styles.syncStatus}>
            <div className={styles.syncDot} />
            Synced
          </div>
          <div className={styles.syncSub}>2 min ago · 3.2 / 8 GB</div>
          <div className={styles.syncBar}>
            <div className={styles.syncFill} />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className={styles.grid}>
        {MEMORY_STATS.map(s => (
          <MemoryCard key={s.label} stat={s} />
        ))}
      </div>

      {/* Checklist */}
      <div className={styles.checkTitle}>Memory checklist</div>
      <div className={styles.checklist}>
        {MEMORY_ITEMS.map(item => (
          <div key={item.id} className={styles.checkItem}>
            <div className={styles.checkIcon}>✓</div>
            <div className={styles.checkBody}>
              <div className={styles.checkLabel}>{item.label}</div>
              <div className={styles.checkSub}>{item.sub}</div>
            </div>
            <span className={styles.checkCount}>{item.count}</span>
            {item.trend && <span className={styles.trend}>{item.trend}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
