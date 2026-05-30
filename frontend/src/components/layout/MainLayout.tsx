import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import HeroSection from '../hero/HeroSection'
import ChatWindow from '../chat/ChatWindow'
import ChatComposer from '../chat/ChatComposer'
import ContextTimeline from '../context/ContextTimeline'
import MemoryInsights from '../context/MemoryInsights'
import { useAppState } from '../../hooks/useAppState'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  const {
    view, setView,
    curProvider, curModel,
    selectProvider, selectModel,
    messages, sendMessage, isTyping,
  } = useAppState()

  return (
    <div className={styles.shell}>
      <Sidebar view={view} onNavigate={setView} />

      <div className={styles.main}>
        <Topbar view={view} onNewChat={() => setView('chat')} />

        {/* HOME */}
        {view === 'home' && (
          <HeroSection onNavigate={setView} />
        )}

        {/* CHAT */}
        {view === 'chat' && (
          <div className={styles.chatShell}>
            <div className={styles.tabs}>
              <div className={`${styles.tab} ${styles.tabOn}`}>AI Agent Platform</div>
              <div className={styles.tab}>E-Commerce</div>
              <div className={`${styles.tab} ${styles.tabNew}`}>+ New</div>
            </div>
            <ChatWindow
              messages={messages}
              isTyping={isTyping}
              providerName={curProvider.name}
            />
            <ChatComposer
              provider={curProvider}
              model={curModel}
              onSelectProvider={selectProvider}
              onSelectModel={selectModel}
              onSend={sendMessage}
            />
          </div>
        )}

        {/* TIMELINE */}
        {view === 'timeline' && (
          <div className={styles.scrollView}>
            <ContextTimeline />
          </div>
        )}

        {/* MEMORY */}
        {view === 'memory' && (
          <div className={styles.scrollView}>
            <MemoryInsights />
          </div>
        )}
      </div>
    </div>
  )
}
