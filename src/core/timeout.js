module.exports = function getTimeoutFetch(fetch,timeout) {
  let timeoutFetch
  if (fetch.polyfill) {
    timeoutFetch = function (request) {
      return fetch(request, {
        timeout: timeout,
      })
    }
  } else {
    timeoutFetch = function (request) {
      return new Promise((resolve, reject) => {
        let timeoutId = setTimeout(() => {
          reject(new TypeError('Network request timeout'))
        }, timeout)
        fetch(request).then((response) => {
          clearTimeout(timeoutId)
          resolve(response)
        }).catch(err => {
          clearTimeout(timeoutId)
          reject(err)
        })
      })
    }
  }
  return timeoutFetch
}

