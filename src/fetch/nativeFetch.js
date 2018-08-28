export default async function getNativeFetch() {
  if (typeof window !== 'undefined' && typeof self !== 'undefined') {
    require('./browerFetch')
    return self.fetch
  } else {
    const fetch = require('./nodeFetch')
    return fetch
  }
}
