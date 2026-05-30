import React from 'react'
import type { ViewId } from '../../types'
import { PROJECTS } from '../../data'
import styles from './Sidebar.module.css'

interface SidebarProps {
  view: ViewId
  onNavigate: (v: ViewId) => void
}

const NAV = [
  { id: 'home' as ViewId,     icon: '⌂', label: 'Home' },
  { id: 'chat' as ViewId,     icon: '◎', label: 'Chat',     badge: '3' },
  { id: 'timeline' as ViewId, icon: '⊘', label: 'Timeline' },
  { id: 'memory' as ViewId,   icon: '◈', label: 'Memory' },
]

export default function Sidebar({ view, onNavigate }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>C</div>
          <span className={styles.logoName}>ContextAI</span>
        </div>
      </div>

      <div className={styles.search}>
        <span className={styles.searchIcon}>⌕</span>
        <input placeholder="Search…" className={styles.searchInput} />
      </div>

      <div className={styles.scroll}>
        <div className={styles.sectionLabel}>Menu</div>
        {NAV.map(n => (
          <div
            key={n.id}
            className={`${styles.navItem} ${view === n.id ? styles.active : ''}`}
            onClick={() => onNavigate(n.id)}
          >
            <span className={styles.navIcon}>{n.icon}</span>
            <span className={styles.navLabel}>{n.label}</span>
            {n.badge && <span className={styles.badge}>{n.badge}</span>}
          </div>
        ))}

        <div className={styles.sectionLabel}>Projects</div>
        {PROJECTS.slice(0, 3).map(p => (
          <div key={p.id} className={styles.projectMini} onClick={() => onNavigate('chat')}>
            <div className={styles.projectName}>{p.name}</div>
            <div className={styles.projectMeta}>
              <span className={styles.provDot} style={{ background: p.providerColor }} />
              {p.provider} · {p.memories} memories
            </div>
          </div>
        ))}

        <div className={styles.sectionLabel}>Recent</div>
        <div className={styles.navItem} onClick={() => onNavigate('chat')}>
          <span className={styles.navIcon} style={{ fontSize: 11 }}>↩</span>
          <span className={styles.navLabel} style={{ fontSize: 11 }}>Auth system</span>
        </div>
        <div className={styles.navItem}>
          <span className={styles.navIcon} style={{ fontSize: 11 }}>↩</span>
          <span className={styles.navLabel} style={{ fontSize: 11 }}>DB schema design</span>
        </div>

        <div className={styles.bottom}>
          <div className={styles.navItem}>
            <span className={styles.navIcon}>⚙</span>
            <span className={styles.navLabel}>Settings</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
