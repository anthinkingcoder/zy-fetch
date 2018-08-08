const config = {
  headers: {},
  responseType: 'json',
  methods: 'get',
  transformResponse: false,
  credentials: 'same-origin',
  timeout: 0
}

// const methods = ['get', 'delete', 'head', 'options', 'post', 'patch', 'put']
// methods.forEach(method => {
//   config.headers[method] = {}
// })

export default config