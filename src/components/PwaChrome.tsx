import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { isAudioPlaybackActive } from '../pwa/audioPlaybackGate'

/** Quiet settle after audio stops / route change before claiming the waiting SW. */
const QUIET_MS = 900
/** Poll while deferred so pause/stop can apply the update without a modal. */
const BUSY_POLL_MS = 1500

/**
 * Smart PWA auto-update (registerType: prompt).
 *
 * When a waiting service worker is ready:
 * - Apply automatically after idle / navigation / a short quiet window.
 * - Never interrupt active audio — keep deferring until pause/stop settles.
 * - No reload nag modal; activation happens when safe.
 */
export default function PwaChrome() {
  const { pathname } = useLocation()
  const applyingRef = useRef(false)
  const quietTimerRef = useRef<number | null>(null)

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    immediate: true,
  })

  useEffect(() => {
    if (!needRefresh || applyingRef.current) return

    const clearQuiet = () => {
      if (quietTimerRef.current != null) {
        window.clearTimeout(quietTimerRef.current)
        quietTimerRef.current = null
      }
    }

    const applyWhenQuiet = () => {
      if (applyingRef.current || !needRefresh) return
      if (isAudioPlaybackActive()) return
      clearQuiet()
      quietTimerRef.current = window.setTimeout(() => {
        quietTimerRef.current = null
        if (applyingRef.current) return
        if (isAudioPlaybackActive()) return
        applyingRef.current = true
        setNeedRefresh(false)
        void updateServiceWorker(true).finally(() => {
          applyingRef.current = false
        })
      }, QUIET_MS)
    }

    applyWhenQuiet()

    const pollId = window.setInterval(() => {
      if (!needRefresh || applyingRef.current) return
      if (isAudioPlaybackActive()) {
        clearQuiet()
        return
      }
      applyWhenQuiet()
    }, BUSY_POLL_MS)

    const onVisibility = () => {
      if (document.visibilityState === 'visible') applyWhenQuiet()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      clearQuiet()
      window.clearInterval(pollId)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [needRefresh, pathname, setNeedRefresh, updateServiceWorker])

  // Invisible bridge — install lives in the header; updates apply when safe.
  return null
}
