const config = {
  headers: {
    common: {}
  }
}

const methdos = ['get', 'delete', 'head', 'options', 'post', 'patch', 'put']
methdos.forEach(method => {
  config.headers[method] = {}
})


export default config