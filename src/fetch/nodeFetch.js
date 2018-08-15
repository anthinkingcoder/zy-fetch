const nodeFetch = require('node-fetch/lib/index.js')
if (global) {
  global.fetch = nodeFetch
  global.Response = nodeFetch.Response
  global.Request = nodeFetch.Request
  global.Headers = nodeFetch.Headers
}
