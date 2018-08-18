# zy-fetch
fetch api base http client for the brower & node,support Interceptors



## Features

- Use [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser when not support fetch,see [Fetch-polyfill](https://github.com/github/fetch)
- Use [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) from the browser when support fetch
- Use [node-fetch](https://github.com/bitinn/node-fetch) from the node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Supports automatic transformResponse,transformRequest
- Supports automatic build SearchParams
- Support Timeout
- Support Interceptors
- Support Create Instance

## Browser Support

- Chrome
- Firefox
- Safari 6.1+
- Internet Explorer 9+


## Installing

Using npm:

```bash
$ npm install zy-fetch -s
```
and
```javascript
import 'zy-fetch'
```

Using cdn:

```html
<script src="https://cdn.jsdelivr.net/npm/zy-fetch@1.6.5/dist/zy-fetch.min.js"></script>
```

## Example

### NORMAL
> This is the writing of fetch API, see [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
```js
fetch('/users.html', {
  headers: {
    
  }
})
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    document.body.innerHTML = body
  })
```

### MORE
> This is a shorthand way
#### GET
```js
// to get userinfo
fetch.get('/mock/userinfo?userid=123')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });

// or
fetch.get('/mock/userinfo', {
  params: {
    userid:123
  }
})
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });

```
#### POST

```js
// to add user
fetch.post('/user/add', JSON.stringify({'name':'zhoulin'}))
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });

```
#### Concurrent Requests
```js
  const userFetch = fetch('api1')
  const teacherFetch = fetch('api2')
  fetch.all([userFetch,teacherFetch])
  .then((responses) => {
    return fetch.all(responses[0].json(),responses[1].text())
  }).then(datas => {
    console.info(['user',datas[0]])
     console.info(['teacher',datas[1]])
  })
  
  // use fetch.spread to simplify
   fetch.all(userFetch,teacherFetch)
   .then(fetch.spread(function(userRes,teacherRes) {
     return fetch.all(userRes.json(),teacherRes.text())
   })).then(fetch.spread(function(user,teacher) {
     //...
   }))
```

#### Execute fetch in sequence
```js
 const fetch1 = fetch.bind(fetch, './mock/a.json')
    const fetch2 = fetch.bind(fetch, './mock/a.json')
  fetch.allByOrder([fetch1, fetch2]).then(fetch.spread((response1, response2) => {
    console.info([response1, response2])
  }))
```

## transformRequest
you can set transformRequest  to auto transformRequest, like this,
```js

fetch.post('/add/user', {
  name: 'zhoulin'
}, {
  transformRequest:true
})
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });

//equal
fetch.post('/add/user',JSON.stringify({
   name: 'zhoulin'
  }))
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });
```

## transformResponse
you can set responseType and transformResponse to auto transformResponse, like this,
```js
fetch.get('/mock/city.json', {
  transformResponse:true, //default false
  responseType: 'json' //default json
})
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });
```

## api
### Request method aliases
##### fetch(init,option)
##### fetch.send(init,option)
##### fetch.get(init[, option])
##### fetch.delete(init[, option])
##### fetch.head(init[, option])
##### fetch.options(init[, option])
##### fetch.post(init[, body[, option]])
##### fetch.put(init[, body[, option]])
##### fetch.patch(init[, body[, option]])

### Concurrency
##### fetch.all(fetchArray)
##### fetch.allByOrder(fetchArray)
##### fetch.spread(callback)

### Creating an instance
You can create a new instance of zyFetch with a custom config.
##### fetch.create([config])


## request config
fetch(init,option),in addition to fetch's own option, option include other option,like this
```js
      responseType: 'json', //json,blob,formData,arrayBuffer,text
      transformResponse: false, //default false,true represents automatic  transform response 
      timeout: 1000, //to set request timeout time 
      baseUrl: ''  //base url
```
## Global Config
### defaults
```js
    const config = {
      headers: {},
      responseType: 'json', //json,blob,formData,arrayBuffer,text
      method: 'get',
      transformResponse: false, //default false,true represents automatic  transform response 
      transformRequest: false, //default false,true represents automatic  transform request
      credentials: 'same-origin', //omit,include,same-origin
      timeout: 0,
      baseUrl: '' // base url,
    }
```
### Set Config
you also can set golbal config like this
```js
     fetch.config.headers['Content-Type'] = 'application/json'
     fetch.config.responseType = 'blob'
     fetch.config.transformResponse = true
       fetch.config.transformRequest = true
     fetch.config.timeout = 3000
     fetch.config.baseUrl = 'https://www.zzz.com'

```



## checkStatus
A fetch() promise will reject with a TypeError when a network error is encountered or CORS is misconfigured on the server side, although this usually means permission issues or similar — a 404 does not constitute a network error, for example.  An accurate check for a successful fetch() would include checking that the promise resolved, then checking that the Response.ok property has a value of true,
so we Built in  ```checkStatus``` function
```js
function checkStatus () {
  if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
}
```

## Timeout
```js
 fetch('./mock/a.json', {
     transformResponse: true,
     timeout:1000,
   }).then(function (res) {
     console.info(res)
   }).catch(function (err) {
     console.info(err) //new Error('request timeout')
   })

```

## Interceptors

You can intercept requests or responses,add a request interceptor before request send or  add a response interceptor after response finished.
response interceptor include transform interceptor and noTransform interceptor 
```zy-fetch``` inside is a mode of ```responsibility chain```

1.if not automatic transform response
>This order is ->request interceptors -> fetch -> checkstatus -> noTransform interceptor

2.if automatic transform response
>This order is ->request interceptors -> fetch -> checkstatus -> noTransform interceptor -> transformResponse -> transform interceptor

### example
```js
// Add a x-csrf-token header
fetch.interceptors.request.use(
  request => {
    const csrfToken = cookies.get('csrfToken')
    if (!/^(GET|HEAD|OPTIONS|TRACE)$/.test(request.method)) {
      request.headers.append('x-csrf-token',csrfToken)
    }
    // remember return
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a common response interceptor, to handle not login
fetch.interceptors.response.noTransform.use(
  response => {
    return response.json(function (data) {
      return data
    })
  },
  error => {
    return Promise.reject('system error')
  })
  
 fetch.interceptors.response.transform.use(
   data => {
       if (data.data.code === '0006') {
             // handle not login
             }
             //remember return
             return response
   },
   error => {
     return Promise.reject('system error')
   })
 ```
## Create Instance
```js
//fetch.create(config)
const instance = fetch.create({
  transformResponse:true
})
instance.get('/mock/city.json', {
})
  .then(function (data) {
    console.info(data)
  })
  .catch(function (error) {
    console.log(error);
  });
```

## Aborting Fetch
  browsers & node that do not support fetch will also not support AbortController or AbortSignal , see [polyfill](https://github.com/mo/abortcontroller-polyfill),
```js
  import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
  import 'zy-fetch'
  var controller = new AbortController();
  var signal = controller.signal;
  fetch('/city.json', {'signal':signal}).then(function (result) {
    console.info(result)
  }).catch(function (error) {
    console.info(error)
  })
  setTimeout(function () {
    controller.abort()
  })

```

