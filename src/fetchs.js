import zyFetch from './zyFetchs'

if (typeof window !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = zyFetch
}

if (global) {
  global.fetch = zyFetch
}

