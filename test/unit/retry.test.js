import fetch from '../../src/zyFetchs'
fetch.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
describe('testing retry count', () => {
  test('test retry', () => {
    return fetch.get(`/retry`,{
      retry:3,
      timeout:10
    }).then(function (response) {
      return response.json()
    }).catch(function (error) {
      expect(error).toEqual(new Error('Network request timeout'))
    })
  })
});