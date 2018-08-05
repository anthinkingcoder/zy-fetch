import {fetch} from './core/fetch'
export {
  fetch
}
if (typeof window !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = fetch
}

