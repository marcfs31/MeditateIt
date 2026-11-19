import { audioEngine } from '../audio'

/**
 * True while generative audio is active or still fading out.
 * Service worker activation must wait until this is false.
 */
export function isAudioPlaybackActive(): boolean {
  if (audioEngine.getStatus() === 'running') return true
  if (audioEngine.isCrossfading()) return true
  return false
}
