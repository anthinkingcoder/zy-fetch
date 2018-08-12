const toString = Object.prototype.toString

/**
 * 对象是否为date类型
 */
export function isDate(val) {
  return toString.call(val) === '[object Date]'
}

/**
 * 对象是否为array类型
 */
export function isArray(val) {
  return toString.call(val) === '[object Array]'
}

/**
 * 对象是否为对象类型
 */
export function isObject(val) {
  return val !== null && typeof val === 'object'
}

/**
 * 对象是否为函数类型
 */
export function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * 对象是否为普通对象类型
 */
export function isNormalObject(val) {
  return toString.call(val) === '[object Object]'
}