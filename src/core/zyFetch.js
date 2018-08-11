import '../fetch/fetch-polyfill'
import Interceptor from './interceptor'
import transformResponse from '../util/transformResponse'
import checkStatus from '../util/checkStatus'
import getTimeoutFetch from './timeout'
import PromiseTask from './promiseTask'
import buildSearchParams from '../util/buildSearchParams'
import {isFunction} from '../util/types'
import {isAbsoluteURL, buildAbsoluteURL} from "../util/baseUrl"

class zyFetch {
  constructor(config, fetch) {
    this.config = config
    this.nativeFetch = fetch
    this.interceptors = {
      request: new Interceptor(),
      response: {
        transform: new Interceptor(),
        noTransform: new Interceptor()
      }
    }
  }

  send(init, option = {}) {
    let config = {}
    // merge config
    Object.assign(config, this.config, option)

    let request = this._getRequest(init, config)

    let promiseTask = new PromiseTask()
    this._initPromiseTask(promiseTask, config)
    return promiseTask.execute(request)
  }

  get(init, option) {
    option = this._methodsOptionMerge(option, 'get')
    return this.send(init, option)
  }

  delete(init, option) {
    option = this._methodsOptionMerge(option, 'get')
    return this.send(init, option)
  }

  options(init, option) {
    option = this._methodsOptionMerge(option, 'get')
    return this.send(init, option)
  }

  head(init, option) {
    option = this._methodsOptionMerge(option, 'get')
    return this.send(init, option)
  }


  post(init, body, option) {
    option = this._methodsOptionMerge(option, 'post', body)
    return this.send(init, option)
  }

  put(init, body, option) {
    option = this._methodsOptionMerge(option, 'put', body)
    return this.send(init, option)
  }

  patch(init, body, option) {
    option = this._methodsOptionMerge(option, 'patch', body)
    return this.send(init, option)
  }

  /**
   *
   * @param fetchs some fetch
   * @returns {Promise.<*[]>} return promise
   */
  all(fetchs) {
    return Promise.all(fetchs)
  }

  /**
   * Execute fetch in sequence
   * @param fetchs some fetch
   */
  async allByOrder(fetchs) {
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
  spread(cb) {
    return function (args) {
      cb.apply(null, args)
    }
  }

  _initPromiseTask(promiseTask, config) {
    let interceptors = this.interceptors
    // set request promise
    interceptors.request.forEach(interceptor => {
      promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
    })
    //set timeout
    if (config.timeout && config.timeout > 0) {
      promiseTask.add(getTimeoutFetch(this.nativeFetch, config.timeout))
    } else {
      promiseTask.add(this.nativeFetch)
    }

    //set checkStatus promise
    promiseTask.add(checkStatus)

    //set before transform response interceptors promise
    interceptors.response.noTransform.forEach(interceptor => {
      promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
    })

    //set transform response promise
    if (config.transformResponse) {
      promiseTask.add(transformResponse.bind(this, config.responseType))
      // set after transform response promise
      interceptors.response.transform.forEach(interceptor => {
        promiseTask.add(interceptor.onFulfilled, interceptor.onRejected)
      })
    }
  }

  _methodsOptionMerge(option = {}, method, body) {
    Object.assign(option, {
      method,
      body
    });
    return option
  }

  _getRequest(init, config) {
    let url = init.url ? init.url : init
    if (config.baseUrl && !isAbsoluteURL(url)) {
      url = buildAbsoluteURL(config.baseUrl, url)
    }
    if (config.params) {
      url = buildSearchParams(url, config.params)
    }
    if (init instanceof Request) {
      return this._mergeRequest(url, init, config)
    }
    return new Request(url, config)
  }

  _mergeRequest(url, request, config) {
    let copyRequest = {}
    //copy request props, but body can not get, so request.body will be ignore
    for (let key in request) {
      let val = request[key]
      if (!isFunction(val)) {
        copyRequest[key] = val
      }
    }
    Object.assign(copyRequest, config)
    return new Request(url, copyRequest)
  }
}

export default zyFetch