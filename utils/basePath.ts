// Site base path baked in at build time (NUXT_APP_BASE_URL), e.g. '/meshtastic-web-flasher/'
// when served as a GitHub Pages project site. Prefix root-absolute public/ paths with it.
const BASE = (process.env.APP_BASE_URL || '/').replace(/\/$/, '')

export function withBase(path: string): string {
  return `${BASE}${path}`
}
