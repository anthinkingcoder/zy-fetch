import fetch from '../../lib/zyFetchs'

describe('testing create an instance', () => {
  test('create', () => {
    fetch.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
    return fetch.get('/province.json').then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data[0]).toBe('湖南')
    })
  })
});