export default function getRetryInterceptor(fetch, request, option) {

  //重试次数
  let retryCount = option.retryCount;

  console.info(retryCount)
  let onFulfilled = function (result) {
    console.info()
    return result
  }

  let onRejected = function (error) {
    if (retryCount >= 1) {
      return fetch(request)
    } else {
      return Promise.reject(error)
    }
  }

  return [onFulfilled,
    onRejected]
}