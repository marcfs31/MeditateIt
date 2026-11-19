import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

/** Project Pages prefix (`/MeditateIt/`). Local / root hosts stay `/` when unset. */
function pagesBase(): string {
  const raw = process.env.PAGES_BASE?.trim()
  if (!raw || raw === '/') return '/'
  const withLead = raw.startsWith('/') ? raw : `/${raw}`
  return withLead.endsWith('/') ? withLead : `${withLead}/`
}

const base = pagesBase()

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      // Waiting SW + smart client apply (idle/nav/quiet; never during audio).
      // See PwaChrome — no reload nag when activation is safe.
      registerType: 'prompt',
      injectRegister: false,
      // Public assets are copied into dist/ and matched by globPatterns —
      // do not also list them in includeAssets (that duplicated precache entries).
      // Manifest icons are covered by globPatterns; disable the extra auto-inject.
      includeAssets: [],
      includeManifestIcons: false,
      manifest: {
        name: 'MeditateIt',
        short_name: 'MeditateIt',
        description:
          'Generative meditation soundscapes — noise, solfeggio, and beats you shape in real time.',
        theme_color: '#e4efe9',
        background_color: '#e4efe9',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: base,
        scope: base,
        lang: 'en',
        // No "health" — lifestyle/wellness only (audit / W4-6).
        categories: ['lifestyle', 'wellness'],
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // App shell + hashed assets (icons/fonts/worklet via public → dist).
        // Omit webmanifest — the plugin already precaches the generated manifest.
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        navigateFallback: `${base}index.html`,
        navigateFallbackDenylist: [/^\/api\//],
        cleanupOutdatedCaches: true,
        // No skipWaiting / clientsClaim — waiting SW activates when the client
        // calls updateServiceWorker(true) after audio is quiet (registerType: prompt).
      },
      devOptions: {
        enabled: false,
      },
    }),
    {
      name: 'spa-404',
      apply: 'build',
      closeBundle() {
        if (base === '/') return
        const dist = resolve('dist')
        copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      },
    },
  ],
})
