class PromiseChain {
  constructor() {
    this.chains = []
  }

  add(onFulfilled, onRejected) {
    this.chains.push({
      onFulfilled,
      onRejected
    })
  }

  execute(init) {
    let promise = Promise.resolve(init)
    this.chains.forEach(({onFulfilled, onRejected}) => {
      promise = promise.then(onFulfilled, onRejected)
    })
    this.chains = []
    return promise
  }
}

module.exports =  PromiseChain