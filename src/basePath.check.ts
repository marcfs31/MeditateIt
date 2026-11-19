/**
 * Base-path join used by GitHub Pages (`/MeditateIt/`) and root deploys.
 */
import assert from 'node:assert/strict'
import { routerBasename, withBase } from './basePath.ts'

assert.equal(withBase('/', '/worklets/noise-processor.js'), '/worklets/noise-processor.js')
assert.equal(
  withBase('/MeditateIt/', '/worklets/noise-processor.js'),
  '/MeditateIt/worklets/noise-processor.js',
)
assert.equal(withBase('/MeditateIt', 'worklets/noise-processor.js'), '/MeditateIt/worklets/noise-processor.js')
assert.equal(routerBasename('/'), undefined)
assert.equal(routerBasename('/MeditateIt/'), '/MeditateIt')

console.log('basePath.check: ok')
