import {fetch} from '../../src/index'

const baseApi = 'mock/5b69ab3df770e33d7c13428e/zy-fetch'

describe('testing timeout http request', () => {
  test('create user', () => {
    return fetch.post(`${baseApi}/createUser`, JSON.stringify({
      name: 'zhoulin',
    }), {timeout: 10}).then(function (response) {
      return response.json()
    }).catch(function (error) {
      expect(error).toEqual(new Error('Network request timeout'))
    })
  })
});