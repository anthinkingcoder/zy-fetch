import 'whatwg-fetch' //fetch polyfill
import Interceptor from './interceptor'

const zyFetch = function (url, option) {

  const chain = [fetch, undefined]

  let request = new Request(url, option)
  let promise = Promise.resolve(request)

  //set request promise
  zyFetch.interceptors.request.forEach(interceptor => {
    chain.unshift(interceptor.resolve, interceptor.reject)
  })

  //set response promise
  zyFetch.interceptors.response.forEach(interceptor => {
    chain.push(interceptor.resolve, interceptor.reject)
  })


  while (chain.length >= 2) {
    promise = promise.then(chain.shift(), chain.shift())
  }
  return promise

}

zyFetch.interceptors = {
  request: new Interceptor(),
  response: new Interceptor()
}


zyFetch.polyfill = fetch.polyfill

export {
  zyFetch as fetch
}






