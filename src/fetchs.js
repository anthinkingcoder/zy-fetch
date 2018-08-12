import ZyFetch from './core/zyFetch'
import globalConfig from './core/config'
import './fetch/fetch-polyfill'
// native fetch
const nativeFetch = self.fetch

export function createInstance(option) {
  let zy = new ZyFetch(option, nativeFetch)
  let instance = proxy(zy.send, zy)

  function proxy(fn, thisArgs) {
    return function (init, option) {
      return fn.call(thisArgs, init, option)
    }
  }

  // extend method
  Object.setPrototypeOf(instance, ZyFetch.prototype)
  // extend own prop
  Object.getOwnPropertyNames(zy).forEach(name => {
    instance[name] = zy[name]
  })
  return instance
}

const zyFetch = createInstance(globalConfig)

zyFetch.create = function (config = {}) {
  let option = {}
  Object.assign(option, globalConfig, config)
  return createInstance(option)
}

export {
  zyFetch as fetch
}

if (typeof window !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = zyFetch
}

