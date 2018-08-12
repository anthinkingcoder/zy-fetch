import {isNormalObject} from './typeCheck'

export default function transformRequest(body, headers) {
  if (isNormalObject(body)) {
    headers['Content-Type'] = 'application/json;charset=utf-8'
    return JSON.stringify(body)
  }
  return body
}