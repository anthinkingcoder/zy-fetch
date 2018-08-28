import ZyFetch from './core/zyFetch'
import globalConfig from './core/config'
import getNativeFetch from './fetch/nativeFetch'
import {deepCopy} from './util/extend'

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

const zyFetch = createInstance(deepCopy(globalConfig))

zyFetch.create = function (config = {}) {
  let option = deepCopy(globalConfig)
  Object.assign(option, config)
  return createInstance(option)
}

module.exports = zyFetch


//for TypeScript.
exports.default = zyFetch