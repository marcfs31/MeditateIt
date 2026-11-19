import { withBase } from '../basePath.ts'

/** Must match `registerProcessor` name in public/worklets/noise-processor.js. */
export const NOISE_WORKLET_NAME = 'meditateit-noise' as const

/**
 * Stable public URL — SW `includeAssets` precaches this path.
 * Prefer fetching this URL (hits precache offline), then addModule via blob
 * or a content-hash query so a stale module identity cannot linger silently.
 */
export const NOISE_WORKLET_URL = withBase(
  import.meta.env.BASE_URL ?? '/',
  '/worklets/noise-processor.js',
)

/**
 * SHA-256 prefix (16 hex) of `public/worklets/noise-processor.js`.
 * Update when the worklet source changes; mismatch → buffer fallback.
 */
export const NOISE_WORKLET_CONTENT_HASH = 'ae0dd1a42f5f847b' as const

const loadByContext = new WeakMap<BaseAudioContext, Promise<boolean>>()

/** Hex SHA-256 of a UTF-8 string (browser SubtleCrypto). */
export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * Load the noise AudioWorklet module once per AudioContext.
 * Returns false when AudioWorklet is missing, integrity fails, or addModule
 * fails (caller should keep the looping-buffer path).
 */
export function ensureNoiseWorklet(ctx: BaseAudioContext): Promise<boolean> {
  const existing = loadByContext.get(ctx)
  if (existing) return existing

  const pending = (async (): Promise<boolean> => {
    if (!('audioWorklet' in ctx) || !ctx.audioWorklet) return false
    if (typeof fetch !== 'function') {
      try {
        await ctx.audioWorklet.addModule(NOISE_WORKLET_URL)
        return true
      } catch {
        return false
      }
    }

    try {
      const res = await fetch(NOISE_WORKLET_URL, { cache: 'force-cache' })
      if (!res.ok) return false
      const source = await res.text()
      const hash = await sha256Hex(source)
      const prefix = hash.slice(0, NOISE_WORKLET_CONTENT_HASH.length)
      if (prefix !== NOISE_WORKLET_CONTENT_HASH) {
        // Integrity miss — do not register an unexpected worklet body.
        return false
      }

      const cacheBusted = `${NOISE_WORKLET_URL}?h=${prefix}`

      // Prefer blob so addModule uses the exact bytes we hashed from SW/cache.
      if (typeof URL !== 'undefined' && typeof Blob !== 'undefined') {
        const blobUrl = URL.createObjectURL(
          new Blob([source], { type: 'application/javascript' }),
        )
        try {
          await ctx.audioWorklet.addModule(blobUrl)
          return true
        } catch {
          /* blob worklets blocked (e.g. CSP) — fall through */
        } finally {
          URL.revokeObjectURL(blobUrl)
        }
      }

      await ctx.audioWorklet.addModule(cacheBusted)
      return true
    } catch {
      try {
        await ctx.audioWorklet.addModule(NOISE_WORKLET_URL)
        return true
      } catch {
        return false
      }
    }
  })()

  loadByContext.set(ctx, pending)
  return pending
}

export function tryCreateNoiseWorkletNode(
  ctx: BaseAudioContext,
): AudioWorkletNode | null {
  try {
    return new AudioWorkletNode(ctx, NOISE_WORKLET_NAME, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [1],
    })
  } catch {
    return null
  }
}
