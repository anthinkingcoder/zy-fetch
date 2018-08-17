export default function getNativeFetch() {
  if (global) {
    const fetch = require('./nodeFetch')
    return fetch
  } else {
    require('./browerFetch')
    return self.fetch
  }
}
