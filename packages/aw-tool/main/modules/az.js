// focus 后选中内容
export function autoFocus(e) {
  e.currentTarget.select()
}

// 保留两位小数
export function toFixedTwo(value) {
  return isNaN(value)
    ? value
    : (+value).toLocaleString('zh', { style: 'currency', currency: 'cny' }).replace(/[^\d.-]/g, '')
}

/* toFix*/
export function toFixed(value, num = 2) {
  if (num === 2) return toFixedTwo(value)
  return isNaN(value) ? value : (+value).toFixed(num)
}

// 防抖包装函数
export function debounce(f, delay = 500, immediate = true) {
  let waiting = false,
    clock
  return function() {
    if (!waiting) {
      waiting = true
      immediate && f.apply(this, arguments)
    }
    clearTimeout(clock)
    clock = setTimeout(() => {
      waiting = false
      !immediate && f.apply(this, arguments)
    }, delay)
  }
}
// 节流包装函数
export function throttle(f, delay = 500, immediate = true) {
  let waiting = false
  return function() {
    if (!waiting) {
      waiting = true
      immediate && f.apply(this, arguments)
      setTimeout(() => {
        waiting = false
        !immediate && f.apply(this, arguments)
      }, delay)
    }
  }
}

// 身份证验证
export function validateCardId(cardId) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(cardId)
}

// 香港身份证验证
export function validateCardIdHK(cardId) {
  const reg = /^[A-Z][0-9]{6}(\([0−9A]\)|[0-9A])$/
  return reg.test(cardId)
}

// 澳门身份证验证
export function validateCardIdMC(cardId) {
  const reg = /^[157][0-9]{6}(\([0−9A]\)|[0-9A])/
  return reg.test(cardId)
}

// 台湾身份证验证
export function validateCardIdTW(cardId) {
  const reg = /^[A-Z][0-9]{9}$/
  return reg.test(cardId)
}

// 手机号验证
export function validatePhone(phone) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(phone)
}

// %s 占位的字符串替换函数
export function printf(str, ...rest) {
  let i = 0
  return str.replace(/%s/g, function() {
    var val = rest[i++]
    return typeof val === 'undefined' ? '%s' : val
  })
}

export function longEnoughValue(value, limit = 1) {
  value = value + ''
  return hasChinese(value) || value.length > limit
}

function hasChinese(str) {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
  return reg.test(str)
}

export function snakeToCamel(data) {
  if (Array.isArray(data)) return data.map((item) => snakeToCamel(item))
  if (Object(data) === data)
    return Object.fromEntries(Object.keys(data).map((key) => [snakeToCamelStr(key), snakeToCamel(data[key])]))
  return data
}

function snakeToCamelStr(str) {
  return str.replace(/_[a-z]/g, (s) => s[1].toUpperCase())
}

export function camelToSnake(data) {
  if (Array.isArray(data)) return data.map((item) => camelToSnake(item))
  if (Object(data) === data)
    return Object.fromEntries(Object.keys(data).map((key) => [camelToSnakeStr(key), camelToSnake(data[key])]))
  return data
}

function camelToSnakeStr(str) {
  return str.replace(/[A-Z]/g, (s) => '_' + s.toLowerCase())
}
