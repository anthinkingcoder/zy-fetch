import {isDate, isObject} from "./typeCheck";

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

export default function buildSearchParams(url, params) {
  if (!params) {
    return url
  }
  let searchParams = []
  Object.keys(params).forEach(key => {
    let value = params[key]
    if (Array.isArray(value)) {
      key = `${key}[]`
    } else {
      value = [value]
    }

    value.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      searchParams.push(`${encode(key)}=${encode(val)}`)
    })
  })
  searchParams = searchParams.join('&')
  if (searchParams.length > 0) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + searchParams
  }
  return url
}