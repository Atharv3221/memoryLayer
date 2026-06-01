import React from 'react'
import type { ViewId } from '../../types'
import styles from './Topbar.module.css'

interface TopbarProps {
  view: ViewId
  onNewChat: () => void
}

const VIEW_LABELS: Record<ViewId, string> = {
  home:     'Home',
  chat:     'Chat',
  timeline: 'Context timeline',
  memory:   'Memory panel',
}

export default function Topbar({ view, onNewChat }: TopbarProps) {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.breadcrumb}>{VIEW_LABELS[view]}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.status}>
          <div className={styles.statusDot} />
          <span>Live</span>
        </div>
        <button className={styles.newBtn} onClick={onNewChat}>+ New chat</button>
        <div className={styles.avatar}>U</div>
      </div>
    </div>
  )
}
