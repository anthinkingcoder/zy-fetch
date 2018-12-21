import fetch from '../../lib/zyFetchs'

fetch.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
fetch.config.transformResponse = true
describe('testing all and allByOrder', () => {
  test('allByOder', async () => {
    var fetch1 = fetch.bind(fetch, '/fetch1')
    var fetch2 = fetch.get.bind(fetch, '/fetch2')
    var datas = await  fetch.allByOrder([fetch1, fetch2])
    expect(datas.length).toEqual(2)
  })
  test('all', () => {
    return fetch.all([fetch('/fetch1'), fetch('/fetch2')]).then(function (datas) {
      expect(datas.length).toEqual(2)
    })
  })
});