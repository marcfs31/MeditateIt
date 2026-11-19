/**
 * Join a Vite `base` (trailing slash) with an app-absolute path.
 * Root deploys stay `/…`. Project Pages (`/MeditateIt/`) prefix that path.
 */
export function withBase(baseUrl: string, path: string): string {
  const base = normalizeBase(baseUrl)
  const rel = path.replace(/^\//, '')
  return `${base}${rel}`
}

/** React Router basename. Root deploys omit it. */
export function routerBasename(baseUrl: string): string | undefined {
  const base = normalizeBase(baseUrl)
  if (base === '/') return undefined
  return base.slice(0, -1)
}

function normalizeBase(baseUrl: string): string {
  const raw = baseUrl.trim()
  if (raw === '' || raw === '/') return '/'
  const withLead = raw.startsWith('/') ? raw : `/${raw}`
  return withLead.endsWith('/') ? withLead : `${withLead}/`
}
