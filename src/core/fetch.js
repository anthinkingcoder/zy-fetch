import '../fetch/fetch-polyfill'
import Interceptor from './interceptor'
import config from './config'
import transformResponse from '../util/transformResponse'
import checkStatus from '../util/checkStatus'
import getTimeoutFetch from './timeout'
import PromiseTask from './promiseTask'

const bodyMethods = ['POST', 'PUT', 'PATCH']
const noBodyMethods = ['GET', 'DELETE', 'OPTIONS', 'HEAD']
const fetch = self.fetch

const zyFetch = function (init, option) {
  option = option || {}
  let config = {}
  // merge config
  Object.assign(config, zyFetch.config, option)

  let request = new Request(init, config)

  let promiseTask = new PromiseTask()

  function _init() {
    // set request promise
    zyFetch.interceptors.request.forEach(interceptor => {
      promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
    })
    //set timeout
    if (config.timeout) {
      promiseTask.add(getTimeoutFetch(config.timeout))
    } else {
      promiseTask.add(fetch)
    }

    //set checkStatus promise
    promiseTask.add(checkStatus)

    //set before transform response interceptors promise
    zyFetch.interceptors.response.noTransform.forEach(interceptor => {
      promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
    })

    //set transform response promise
    if (config.transformResponse) {
      promiseTask.add(transformResponse.bind(this, config.responseType))
      // set after transform response promise
      zyFetch.interceptors.response.transform.forEach(interceptor => {
        promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
      })
    }
  }

  _init()
  return promiseTask.execute(request)
}

zyFetch.interceptors = {
  request: new Interceptor(),
  response: {
    transform: new Interceptor(),
    noTransform: new Interceptor()
  }
}


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
zyFetch.polyfill = fetch.polyfill

export {
  zyFetch as fetch
}






