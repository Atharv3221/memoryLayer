import React from 'react'
import type { MemoryStat } from '../../types'
import styles from './MemoryCard.module.css'

interface MemoryCardProps {
  stat: MemoryStat
}

export default function MemoryCard({ stat }: MemoryCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{stat.label}</div>
      <div className={styles.value}>{stat.value}</div>
      <div className={styles.sub}>{stat.sub}</div>
      <div className={styles.barWrap}>
        <div className={styles.bar}>
          <div className={styles.fill} style={{ width: `${stat.bar}%`, background: stat.color }} />
        </div>
      </div>
    </div>
  )
}
