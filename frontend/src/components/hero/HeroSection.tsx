import React from 'react'
import type { ViewId } from '../../types'
import { PROVIDERS, PROJECTS } from '../../data'
import ProjectCard from '../projects/ProjectCard'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  onNavigate: (v: ViewId) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>AI context management</p>
        <div className={styles.body}>
          <p>
            You switch to another AI and have to{' '}
            <strong>re-explain everything from scratch.</strong>
            <br />
            The context. The problem. What you've tried. Where you're stuck.
          </p>
          <p className={styles.tagline}>We fix that.</p>
        </div>
        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => onNavigate('chat')}>
            Start a conversation
          </button>
          <button className={styles.btnSecondary} onClick={() => onNavigate('memory')}>
            View memory
          </button>
        </div>
        <div className={styles.providers}>
          {PROVIDERS.map(p => (
            <div key={p.id} className={styles.providerPill}>
              <span className={styles.dot} style={{ background: p.color }} />
              {p.name}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.projectsHeader}>
          <span>Recent projects</span>
          <span className={styles.viewAll}>View all</span>
        </div>
        <div className={styles.projectGrid}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => onNavigate('chat')} />
          ))}
        </div>
      </div>
    </div>
  )
}
