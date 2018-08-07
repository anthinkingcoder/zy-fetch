export default function getTimeoutFetch(fetch,timeout) {
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
        let timeout = setTimeout(() => {
          reject(new TypeError('Network request timeout'))
        }, timeout)
        fetch(request).then((response) => {
          clearTimeout(timeout)
          resolve(response)
        }).catch(err => {
          clearTimeout(timeout)
          reject(err)
        })
      })
    }
  }
  return timeoutFetch
}

