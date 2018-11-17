class Interceptor {
  constructor() {
    this.handlers = []
  }

  use(onFulfilled, onRejected) {
    this.handlers.push({
      onFulfilled,
      onRejected
    })
    return this.handlers.length - 1
  }

  remove(id) {
    if (this.handlers[id]) {
      delete this.handlers[id]
      this.handlers[id] = null
      return true
    }
    return false
  }

  forEach(callback, thisArgs) {
    this.handlers.forEach(callback, thisArgs)
  }

}

module.exports =  Interceptor