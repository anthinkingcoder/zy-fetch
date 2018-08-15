import nodeFetch from 'node-fetch'

if (global && !global.fetch) {
  global.fetch = nodeFetch
  global.Response = nodeFetch.Response
  global.Request = nodeFetch.Request
  global.Headers = nodeFetch.Headers
}
