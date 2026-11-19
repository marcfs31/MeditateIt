/**
 * iOS / iPadOS Safari does not fire beforeinstallprompt.
 * Detect devices that need Add to Home Screen guidance.
 */

export function isIosLikeDevice(
  nav: Pick<Navigator, 'userAgent' | 'platform' | 'maxTouchPoints'> = navigator,
): boolean {
  const ua = nav.userAgent.toLowerCase()
  if (/iphone|ipod|ipad/.test(ua)) return true
  // iPadOS reports as MacIntel with touch.
  return nav.platform === 'MacIntel' && nav.maxTouchPoints > 1
}
