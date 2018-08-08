import {fetch} from '../../src/index'

const baseApi = 'mock/5b69ab3df770e33d7c13428e/zy-fetch'

describe('testing timeout http request', () => {
  test('transform response', () => {
    return fetch.get(`${baseApi}/city.json`, {
      transformResponse: true,
      responseType: 'json'
    }).then(function (data) {
      expect(data.data[0]).toBe('长沙')
    })
  })

  test('transform response', () => {
    return fetch.get(`${baseApi}/city.json`, {
      transformResponse: true,
      responseType: 'text'
    }).then(function (data) {
      expect(data).toEqual("{\"data\":[\"长沙\",\"广州\"]}"
      )
    })
  })
});