import ZyFetch from './core/zyFetch'
import globalConfig from './core/config'
import getNativeFetch from './fetch/nativeFetch'

const nativeFetch = getNativeFetch()

function createInstance(option) {
  let zy = new ZyFetch(option, nativeFetch)
  let instance = proxy(zy.send, zy)

  function proxy(fn, thisArgs) {
    return function (init, option) {
      return fn.call(thisArgs, init, option)
    }
  }

  // extend method
  Object.getOwnPropertyNames(ZyFetch.prototype).forEach(name => {
    instance[name] = zy[name]
  })
  // extend own  prop
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

module.exports = zyFetch

//for TypeScript.
exports.default = zyFetch