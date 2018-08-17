import {fetch} from '../../lib/fetchs'

fetch.config.baseUrl = 'https://www.easy-mock.com/mock/5b69ab3df770e33d7c13428e/zy-fetch'
fetch.config.transformResponse = true
describe('testing all and allByOrder', () => {
  test('allByOder', () => {
    var fetch1 = fetch.bind(fetch, '/fetch1')
    var fetch2 = fetch.get.bind(fetch, '/fetch2')
    return fetch.allByOrder([fetch1, fetch2]).then(function (datas) {
      expect(datas.length).toEqual(2)
    })
  })
  test('all', () => {
    return fetch.all([fetch('/fetch1'), fetch('/fetch2')]).then(function (datas) {
      expect(datas.length).toEqual(2)
    })
  })
});