const config = {
  headers: {},
  responseType: 'json',
  withCredentials: false,
  methods: 'get',
  transformResponse: true,
  credentials: 'same-origin'
}

// const methods = ['get', 'delete', 'head', 'options', 'post', 'patch', 'put']
// methods.forEach(method => {
//   config.headers[method] = {}
// })

export default config