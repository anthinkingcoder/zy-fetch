import {isArray} from './typeCheck'
function deepCopy(obj) {
  let deepObj
  if (isArray(obj)) {
    deepObj = []
  } else if (typeof obj === 'object') {
    deepObj = {}
  } else {
    return obj
  }
  Object.keys(obj).forEach((key) => {
    deepObj[key] = deepCopy(obj[key])
  })
  return deepObj
}

export {
  deepCopy
}