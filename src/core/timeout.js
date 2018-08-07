export default function getTimeoutFetch(timeout) {
  let timeoutFetch
  if (fetch.polyfill) {
    timeoutFetch = function (request) {
      return fetch(request, {
        timeout: timeout
      })
    }
  } else {
    timeoutFetch = function (request) {
      return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => {
          reject(new Error('Network request timeout'))
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

