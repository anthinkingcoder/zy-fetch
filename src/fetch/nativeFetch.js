export default function getNativeFetch() {
  if (typeof window !== 'undefined' && self) {
    require('./browerFetch')
    return self.fetch
  } else {
    const fetch = require('./nodeFetch')
    return fetch
  }
}
