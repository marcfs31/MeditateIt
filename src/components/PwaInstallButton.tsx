import { useEffect, useId, useRef, useState } from 'react'
import { useI18n } from '../i18n/useI18n'
import { isStandaloneDisplay } from '../pwa/displayMode'
import { isIosLikeDevice } from '../pwa/iosA2hs'

/** Chromium beforeinstallprompt (not in all DOM lib versions). */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

/**
 * Header Install control — beforeinstallprompt on Chromium, iOS A2HS
 * guidance elsewhere. Hidden in standalone / already-installed display modes.
 */
export default function PwaInstallButton() {
  const { messages } = useI18n()
  const tipId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [standalone, setStandalone] = useState(() =>
    typeof window !== 'undefined' ? isStandaloneDisplay() : false,
  )
  const [installEvent, setInstallEvent] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [iosHintOpen, setIosHintOpen] = useState(false)
  const showIosFallback =
    typeof navigator !== 'undefined' && isIosLikeDevice() && !standalone

  useEffect(() => {
    const syncStandalone = () => setStandalone(isStandaloneDisplay())
    syncStandalone()

    const mqs = [
      window.matchMedia('(display-mode: standalone)'),
      window.matchMedia('(display-mode: fullscreen)'),
      window.matchMedia('(display-mode: minimal-ui)'),
    ]
    for (const mq of mqs) {
      mq.addEventListener('change', syncStandalone)
    }

    const onPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setInstallEvent(null)
      setIosHintOpen(false)
      setStandalone(true)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      for (const mq of mqs) {
        mq.removeEventListener('change', syncStandalone)
      }
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  useEffect(() => {
    if (!iosHintOpen) return
    const onPointer = (event: MouseEvent | TouchEvent) => {
      const root = rootRef.current
      if (!root) return
      if (event.target instanceof Node && root.contains(event.target)) return
      setIosHintOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIosHintOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('touchstart', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('touchstart', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [iosHintOpen])

  if (standalone) return null
  if (!installEvent && !showIosFallback) return null

  const label = messages.pwa.install

  return (
    <div className="install-chrome" ref={rootRef}>
      <button
        type="button"
        className="install-chrome-btn"
        aria-label={label}
        aria-expanded={showIosFallback ? iosHintOpen : undefined}
        aria-controls={showIosFallback ? tipId : undefined}
        title={label}
        onClick={() => {
          if (installEvent) {
            void installEvent.prompt().then(() => {
              setInstallEvent(null)
            })
            return
          }
          setIosHintOpen((open) => !open)
        }}
      >
        <svg
          className="install-chrome-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M11 4a1 1 0 1 1 2 0v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.59V4ZM5 18a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
          />
        </svg>
      </button>
      {showIosFallback && iosHintOpen ? (
        <div
          id={tipId}
          className="install-chrome-tip"
          role="dialog"
          aria-label={messages.pwa.iosInstallTitle}
        >
          <p className="install-chrome-tip-title">
            {messages.pwa.iosInstallTitle}
          </p>
          <ol className="install-chrome-tip-steps">
            <li>{messages.pwa.iosInstallStepShare}</li>
            <li>{messages.pwa.iosInstallStepAdd}</li>
          </ol>
          <button
            type="button"
            className="btn btn-ghost install-chrome-tip-dismiss"
            onClick={() => setIosHintOpen(false)}
          >
            {messages.pwa.dismiss}
          </button>
        </div>
      ) : null}
    </div>
  )
}
