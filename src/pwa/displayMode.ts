/**
 * Installed / standalone display detection for install affordances.
 * Covers Chromium display-mode, iOS navigator.standalone, and fullscreen.
 */

export function isStandaloneDisplay(
  win: Window & { navigator: Navigator & { standalone?: boolean } } = window,
): boolean {
  if (typeof win.matchMedia === 'function') {
    if (win.matchMedia('(display-mode: standalone)').matches) return true
    if (win.matchMedia('(display-mode: fullscreen)').matches) return true
    if (win.matchMedia('(display-mode: minimal-ui)').matches) return true
  }
  return win.navigator.standalone === true
}
