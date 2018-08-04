import {fetch, Response, Request, Headers} from 'ywl-fetch'

if (window && window.fetch) {
  fetch = window.fetch
  Response = window.Response
  Request = window.Request
  Headers = window.Headers
}

const zyFetch = function (url, option) {
  return fetch(url, option)
}

export default zyFetch





