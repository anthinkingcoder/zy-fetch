import {fetch} from '../../lib/fetchs'
const baseApi = 'mock/5b69ab3df770e33d7c13428e/zy-fetch'
describe('testing normal http request', () => {
  test('user json', () => {
    return fetch(`${baseApi}/user.json`).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.name).toBe('zhoulin')
    })
  });

  test('create user,body json', ()=> {
    return fetch.post(`${baseApi}/createUser`,JSON.stringify( {
      name: 'zhoulin'
    })).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.user.name).toBe('zhoulin')
    })
  })
  test('create user, body object', ()=> {
    return fetch.post(`${baseApi}/createUser_formdata`,'name=zhoulin').then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.user.name).toEqual('name=zhoulin')
    })
  })
});