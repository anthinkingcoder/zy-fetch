import {fetch} from '../../src/fetchs'

const baseApi = 'mock/5b69ab3df770e33d7c13428e/zy-fetch'

describe('test http request with interceptor', () => {
  test('request interceptor', () => {
    fetch.interceptors.request.use((request) => {
      request.headers.append('csrf-token', '88888888')
      return request
    })
    return fetch(`${baseApi}/csrfToken`, {
      method: 'post'
    }).then(function (response) {
      return response.json()
    }).then(function (data) {
      expect(data.data.headers['csrf-token']).toBe('88888888')
    })
  })

  test('noTransform response interceptor', () => {
    fetch.interceptors.response.noTransform.use((response) => {
      return response.json().then(res => {
        return res
      })
    })
    return fetch(`${baseApi}/user.json`, {
      method: 'get'
    }).then(function (response) {
      expect(response.data.name).toBe('zhoulin')
    }).catch(function (res) {
    })
  })

  test('transform response interceptor', () => {
    fetch.interceptors.response.transform.use((data) => {
      if (data.code === '123456') {
        return data
      } else {
        throw new Error('login error')
      }
    }, (error) => {
      return Promise.reject('error')
    })
    return fetch(`${baseApi}/needLogin`, {
      method: 'post',
      headers: {
        token: '12345'
      }
    }).catch(err => {
      expect(err).toEqual(new Error('login error'))
    })
  })
})