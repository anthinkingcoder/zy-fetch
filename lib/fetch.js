import {fetch, Response, Request, Headers} from 'ywl-fetch'
import Interceptor from './interceptor'

let coreFetch, coreResponse, coreRequest, coreHeaders
if (window && window.fetch) {
  coreFetch = window.fetch
  coreResponse = window.Response
  coreRequest = window.Request
  coreHeaders = window.Headers
}
else {
  coreFetch = fetch;
  coreResponse = Response
  coreRequest = Request
  coreHeaders = Headers
}

const zyFetch = {
  fetch(url, option) {
    const chain = []
    const request = new Request(url, option)
    let promise = Promise.resolve(request)
    zyFetch.interceptors.forEach(interceptor => {
      chain.push(interceptor.resolve, interceptor.reject)
    })

    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    console.info(request)
    return coreFetch(request)
  },
  Response: coreFetch,
  Request: coreRequest,
  Headers: Headers
}

zyFetch.interceptors = {
  request: new Interceptor(),
  response: new Interceptor()
}


export default zyFetch




