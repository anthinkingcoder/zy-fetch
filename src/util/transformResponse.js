export default function transformResponse(responseType, response) {
  switch (responseType) {
    case 'json': {
      return response.json().then(res => {
        if (typeof res === 'string') {
          return JSON.parse(res)
        } else {
          return res
        }
      })
    }
    case 'blob': {
      return response.blob()
    }
    case 'text': {
      return response.text()
    }
    case  'arrayBuffer': {
      return response.arrayBuffer()
    }
    case 'formData': {
      return response.formData()
    }
    default: {
      return Promise.resolve(response)
    }
  }
}