import {fetch, Response, Request, Headers} from 'ywl-fetch'
import Interceptor from './interceptor'

let coreFetch, coreResponse, coreRequest, coreHeaders
// if (window && window.fetch) {
//   coreFetch = window.fetch
//   coreResponse = window.Response
//   coreRequest = window.Request
//   coreHeaders = window.Headers
// }
// else {
coreFetch = fetch;
coreResponse = Response
coreRequest = Request
coreHeaders = Headers
// }


const zyFetch = function (url, option) {
  // const chain = []
  // const request = new coreRequest(url, option)
  // let promise = Promise.resolve(request)
  // zyFetch.interceptors.request.forEach(interceptor => {
  //   chain.push(interceptor.resolve, interceptor.reject)
  // })
  //
  // while (chain.length > 0) {
  //   promise = promise.then(chain.shift(), chain.shift())
  // }
  // console.info(request)
  return coreFetch(request)
}

zyFetch.interceptors = {
  request: new Interceptor(),
  response: new Interceptor()
}

export {
  zyFetch as fetch,
  coreResponse as Response,
  coreRequest as Request,
  coreHeaders as Headers
}




