export default function getNativeFetch() {
  if (global) {
    require('./nodeFetch')
    return global.fetch
  } else {
    require('./browerFetch')
    return self.fetch
  }
}
