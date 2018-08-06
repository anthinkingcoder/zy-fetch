# zy-fetch
fetch api base http client for the brower,support Interceptors



## Features

- Use [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser when not support fetch
- Use [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) from the browser when support fetch
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Support Interceptors

## Browser Support

- Chrome
- Firefox
- Safari
- Internet Explorer 10+


## Installing

Using npm:

```bash
$ npm install zy-fetch -s
```
and
```javascript
import 'zy-fetch'
```

Using script:

```html
<script src="./dist/zy-fetch.js"></script>
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
// to mock a json data
fetch.get('/mock/city.json')
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

#### File Upload

```js
// to upload file
var input = document.querySelector('input[type="file"]')
var data = new FormData()
data.append('file', input.files[0])

fetch.post('/file/upload', data)
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
  const userFetch = fetch()
  const teacherFetch = fetch()
  fetch.all(userFetch,teacherFetch)
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
 const fetch1 = fetch.bind(null, './mock/a.json')
    const fetch2 = fetch.bind(null, './mock/a.json')
  fetch.allByOrder([fetch1, fetch2]).then(fetch.spread((response1, response2) => {
    console.info([response1, response2])
  }))
```
## Interceptors

You can intercept requests or responses,add a request interceptor before request send or  add a response interceptor after response finished
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
fetch.interceptors.response.use(
  response => {
    return response().json().then(data => {
      if (response.data.code === '0006') {
            // handle not login
            }
            //remember return
            return response
    })
  },
  error => {
    return Promise.reject('system error')
  })
```
