import checkStatus from '../util/checkStatus'

export default function getRetryInterceptor(fetch, request, option) {

  //retry count
  let retryCount = option.retryCount;

  //timeout
  let retryTimeout = option.retryTimeout


  let retry = function () {
    return fetch(request).then(checkStatus).catch(error => {
      return onRejected(error)
    })
  }

  let retryAdapter = function () {
    if (retryTimeout && retryTimeout > 0) {
      return async function () {
        await timeout(retryTimeout)
        return retry()
      }
    } else {
      return retry
    }
  }


  //get retry function
  let retryFunction = retryAdapter()


  let onFulfilled = function (result) {
    return result;
  }


  let onRejected = async function (error) {
    if (retryCount >= 1) {
      retryCount--;
      return retryFunction()
    } else {
      return Promise.reject(error);
    }
  }


  return [onFulfilled,
    onRejected]
}

function timeout(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}