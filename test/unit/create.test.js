import fetch from '../../lib/fetchs'


describe('testing create an instance', () => {
  test('create', () => {
    const instance = fetch.create()
    instance.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
    return instance.get('/province.json').then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data[0]).toBe('湖南')
    })
  })
});