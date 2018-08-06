const config = {
  headers: {
    common: {}
  }
}

const methods = ['get', 'delete', 'head', 'options', 'post', 'patch', 'put']
methods.forEach(method => {
  config.headers[method] = {}
})

console.info(config)


export default config