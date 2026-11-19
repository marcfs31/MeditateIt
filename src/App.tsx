import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import AppFooter from './components/AppFooter'
import LanguagePicker from './components/LanguagePicker'
import PwaChrome from './components/PwaChrome'
import PwaInstallButton from './components/PwaInstallButton'
import SettingsGearLink from './components/SettingsGearLink'
import { ThemePicker } from './components/ThemePicker'
import type { Messages } from './i18n'
import { useI18n } from './i18n/useI18n'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import SequencePage from './pages/SequencePage'
import SessionPage from './pages/SessionPage'
import SettingsPage from './pages/SettingsPage'
import TermsPage from './pages/TermsPage'
import { loadPrefs } from './storage'
import { applyThemePreference, subscribeSystemColorScheme } from './theme'

function headerLabel(pathname: string, messages: Messages): string {
  if (pathname.startsWith('/settings')) return messages.app.taglineSettings
  if (pathname.startsWith('/privacy')) return messages.app.taglinePrivacy
  if (pathname.startsWith('/terms')) return messages.app.taglineTerms
  return messages.app.taglineHome
}

/** Sync data-theme from prefs; follow OS when preference is system (null). */
function useThemeBootstrap() {
  useEffect(() => {
    let cancelled = false
    void loadPrefs().then((prefs) => {
      if (cancelled) return
      applyThemePreference(prefs.themeId)
    })
    const unsubscribe = subscribeSystemColorScheme()
    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [])
}

function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { messages } = useI18n()
  useThemeBootstrap()

  return (
    <div className={`app-shell${isHome ? ' is-home' : ''}`}>
      <a href="#main" className="skip-link">
        {messages.app.skipToMain}
      </a>

      <header className={`app-header${isHome ? ' is-home' : ''}`}>
        {!isHome ? (
          <>
            <Link to="/" className="brand">
              <span className="brand-mark" aria-hidden="true" />
              {messages.app.brand}
            </Link>
            <p className="app-tagline">{headerLabel(pathname, messages)}</p>
          </>
        ) : null}
        <div className="header-actions">
          <LanguagePicker variant="chrome" />
          <ThemePicker variant="chrome" />
          <PwaInstallButton />
          <SettingsGearLink />
        </div>
      </header>

      <main id="main" className="app-main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/session" element={<SessionPage />} />
          <Route path="/session/:presetId" element={<SessionPage />} />
          <Route path="/sequence/:sequenceId" element={<SequencePage />} />
        </Routes>
      </main>

      <PwaChrome />
      <AppFooter />
    </div>
  )
}

export default App
