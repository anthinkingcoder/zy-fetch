const toString = Object.prototype.toString

/**
 * 对象是否为date类型
 */
function isDate(val) {
  return toString.call(val) === '[object Date]'
}

/**
 * 对象是否为array类型
 */
function isArray(val) {
  return toString.call(val) === '[object Array]'
}

/**
 * 对象是否为对象类型
 */
function isObject(val) {
  return val !== null && typeof val === 'object'
}

/**
 * 对象是否为函数类型
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * 对象是否为普通对象类型
 */
function isNormalObject(val) {
  if (!toString.call(val) === '[object Object]') {
    return false;
  }

  let proto = Object.getPrototypeOf(val);
  return proto === null || proto === Object.getPrototypeOf({});
}

export {
  isDate,
  isArray,
  isObject,
  isFunction,
  isNormalObject
}

