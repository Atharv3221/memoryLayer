import React from 'react'
import type { Project } from '../../types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.name}>{project.name}</div>
      <div className={styles.tags}>
        {project.tags.map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statVal}>{project.memories}</div>
          <div className={styles.statLabel}>memories</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statVal}>{project.tokens}</div>
          <div className={styles.statLabel}>tokens</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statVal}>{project.progress}%</div>
          <div className={styles.statLabel}>context</div>
        </div>
      </div>
      <div className={styles.barWrap}>
        <div className={styles.bar}>
          <div className={styles.barFill} style={{ width: `${project.progress}%` }} />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.provider}>
          <span className={styles.dot} style={{ background: project.providerColor }} />
          {project.provider}
        </div>
        <span className={styles.time}>{project.updatedAt}</span>
      </div>
    </div>
  )
}
