const toString = Object.prototype.toString

export function isDate(val) {
  return toString.call(val) === '[object Date]'
}

export function isArray(val) {
  return toString.call(val) === '[object Array]'
}

export function isObject(val) {
  return val !== null && typeof val === 'object'
}

export function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
