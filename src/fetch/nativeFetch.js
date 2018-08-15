import './brower-fetch'
import './node-fetch'

export default function getNativeFetch() {
  if (global) {
    return global.fetch
  } else {
    return self.fetch
  }
}