import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { routerBasename } from './basePath.ts'
import { bootstrapLocale } from './i18n'
import './index.css'
import App from './App.tsx'

bootstrapLocale()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename(import.meta.env.BASE_URL ?? '/')}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
