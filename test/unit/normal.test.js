import fetch from '../../lib/zyFetchs'
fetch.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
describe('testing normal http request', () => {
  test('user json', () => {
    return fetch(`/user.json`).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.name).toBe('zhoulin')
    })
  });

  test('create user,body json', ()=> {
    return fetch.post('/createUser',JSON.stringify( {
      name: 'zhoulin'
    })).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.user.name).toBe('zhoulin')
    })
  })
  test('create user, body object', ()=> {
    return fetch.post('/createUser_formdata','name=zhoulin').then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.user.name).toEqual('name=zhoulin')
    })
  })
});