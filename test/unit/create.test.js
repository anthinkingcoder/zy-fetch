import {fetch} from '../../src/fetchs'

const baseApi = 'mock/5b69ab3df770e33d7c13428e/zy-fetch'

describe('testing create an instance', () => {
  test('create', () => {
    const instance = fetch.create()
    return instance.get(`${baseApi}/province.json`).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data[0]).toBe('湖南')
    })
  })
});