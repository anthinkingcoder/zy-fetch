import 'whatwg-fetch' //fetch polyfill
import Interceptor from './interceptor'
import config from './config'

const bodyMethods = ['POST', 'PUT', 'PATCH']
const noBodyMethods = ['GET', 'DELETE', 'OPTIONS', 'HEAD']
const fetch = self.fetch

const zyFetch = function (init, option) {
  option = option || {}
  // merge config
  Object.assign(option.headers || {}, zyFetch.config.headers.common, zyFetch.config.headers[option.method || 'get'])

  //set fetch promise
  const chain = [fetch, undefined]

  let request = new Request(init, option)
  let promise = Promise.resolve(request)

  // set request promise
  zyFetch.interceptors.request.forEach(interceptor => {
    chain.unshift(interceptor.onFulfilled, interceptor.onRejected)
  })

  // set response promise
  zyFetch.interceptors.response.forEach(interceptor => {
    chain.push(interceptor.onFulfilled, interceptor.onRejected)
  })

  while (chain.length >= 2) {
    let onFulfilled = chain.shift()
    let onRejected = chain.shift()
    promise = promise.then(onFulfilled, onRejected)
  }

  return promise
}

zyFetch.interceptors = {
  request: new Interceptor(),
  response: new Interceptor()
}

zyFetch.polyfill = fetch.polyfill

bodyMethods.forEach(method => {
  zyFetch[method] = function (init, body, option) {
    Object.assign(option, {
      method,
      body
    })
    return zyFetch(init, option)
  }
})

noBodyMethods.forEach(method => {
  zyFetch[method] = function (init, option) {
    Object.assign(option, {
      method
    })
    return zyFetch(init, option)
  }
})

/**
 *
 * @param fetchs some fetch
 * @returns {Promise.<*[]>} return promise
 */
zyFetch.all = function (fetchs) {
  return Promise.all(fetchs)
}

/**
 * Execute fetch in sequence
 * @param fetchs some fetch
 */
zyFetch.allByOrder = async function (fetchs) {
  let responseArray = []
  for (let i = 0; i < fetchs.length; i++) {
    let response = await fetchs[i].call(this)
    responseArray.push(response)
  }
  return Promise.resolve(responseArray)
}

/**
 * 将函数的数组参数解构 [1,2,3] => 1,2,3
 * @param cb
 * @returns {Function}
 */
zyFetch.spread = function (cb) {
  return function (args) {
    cb.apply(null, args)
  }
}

zyFetch.config = config

export {
  zyFetch as fetch
}






