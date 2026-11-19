/**
 * Pure helpers for PWA install / display-mode gating + mobile viewport meta.
 * Run via `npm test` (scripts/run-checks.ts).
 */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { isStandaloneDisplay } from './displayMode.ts'
import { isIosLikeDevice } from './iosA2hs.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8')
assert.match(
  indexHtml,
  /viewport-fit=cover/,
  'index.html viewport must include viewport-fit=cover',
)

function fakeWindow(opts: {
  standaloneMq?: boolean
  fullscreenMq?: boolean
  minimalUiMq?: boolean
  iosStandalone?: boolean
}): Window & { navigator: Navigator & { standalone?: boolean } } {
  return {
    matchMedia: (query: string) => ({
      matches:
        (opts.standaloneMq === true && query.includes('standalone')) ||
        (opts.fullscreenMq === true && query.includes('fullscreen')) ||
        (opts.minimalUiMq === true && query.includes('minimal-ui')),
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }),
    navigator: { standalone: opts.iosStandalone },
  } as unknown as Window & { navigator: Navigator & { standalone?: boolean } }
}

assert.equal(isStandaloneDisplay(fakeWindow({})), false)
assert.equal(isStandaloneDisplay(fakeWindow({ standaloneMq: true })), true)
assert.equal(isStandaloneDisplay(fakeWindow({ fullscreenMq: true })), true)
assert.equal(isStandaloneDisplay(fakeWindow({ minimalUiMq: true })), true)
assert.equal(isStandaloneDisplay(fakeWindow({ iosStandalone: true })), true)

assert.equal(
  isIosLikeDevice({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
    platform: 'iPhone',
    maxTouchPoints: 5,
  }),
  true,
)
assert.equal(
  isIosLikeDevice({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
    platform: 'MacIntel',
    maxTouchPoints: 5,
  }),
  true,
)
assert.equal(
  isIosLikeDevice({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)',
    platform: 'MacIntel',
    maxTouchPoints: 0,
  }),
  false,
)
assert.equal(
  isIosLikeDevice({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120',
    platform: 'Win32',
    maxTouchPoints: 0,
  }),
  false,
)

console.log('pwa.check: ok')
