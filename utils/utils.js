
const xdate = require('xdate')

/*
防抖，
func 执行的函数
awit 等待时间
immediately 是否是立即执行的
*/
export const debounce = function (func, awit, immediately) {
  let timer = null
  return function () {
    let args = arguments
    var self = this
    if (immediately && !timer) {
      func.apply(self, args)
    }

    if (timer) { clearTimeout(timer) }
    timer = setTimeout(function () {
      func.apply(self, args)
    }, awit)
  }
}

/*
el 比较的元素
elTarget 距离计算的目标元素
result 返回的接口，属性与getBoundingClientRact 一样
*/
export const getEleDistance = function (el, elTarget) {
  let elRect = el.getBoundingClientRact()
  let elTargetRect = elTarget.getBoundingClientRact()
  let result = {}
  for (let key in elRect) {
    result[key] = elRect[key] - elTargetRect[key]
  }
  return result
}

// 判断两个数组值是否相同
export function arrValSame (arr, target, key) {
  if (arr.length !== target.length) return false
  let same = arr.every((item) => {
    if (key) {
      return target.some((target) => target[key] === item[key])
    } else {
      return target.includes(item)
    }
  })
  return same
}

/*
最近一个月
date 结束日期 默认为今天
dateType 时间类型 m:月 w:周
amount 数量 最近几月 最近几周
*/
export function lately ({date = new Date(), dateType = 'm', amount = 1} = {}) {
  let endDate = date.getTime()
  let base = ''
  if (dateType === 'w') {
    base = 6 * 3600 * 24 * 1000
  } else if (dateType === 'm') {
    base = 29 * 3600 * 24 * 1000
  } else {}
  let startDate = endDate - base * amount
  startDate = new xdate(startDate).toString('yyyy-MM-dd')
  endDate = new xdate(endDate).toString('yyyy-MM-dd')
  return {endDate, startDate}
}

/*
获取本月，本周
dateType m:月 w周
date 获取这个时间所处的周或者月。默认为今天
*/
export function getRight ({date = new Date(), dateType = 'm'} = {}) {
  let startDate = ''
  let endDate = ''
  if (dateType === 'm') {
    let m = date.getMonth()
    startDate = new xdate(date.setDate(1))
    let nextMonth = date.setMonth(m + 1)
    endDate = new xdate(nextMonth - 3600 * 24 * 1000)
  } else if (dateType === 'w') {
    let day = date.getDay()
    let millis = date.getTime()
    !day && (day = 7)
    endDate = new xdate(millis + (7 - day) * 24 * 3600 * 1000)
    startDate = new xdate(endDate - 6 * 24 * 3600 * 1000)
  }
  startDate = startDate.toString('yyyy-MM-dd')
  endDate = endDate.toString('yyyy-MM-dd')
  return {startDate, endDate}
}

export function getWeek (date = new Date()) {
  let weekStartEnd = getRight({date, dateType: 'w'})
  let weekString = []
  let millisecond = new Date(weekStartEnd.startDate).getTime()
  for (var a = 0; a < 7; a++) {
    weekString.push(dateToString(millisecond + a * 24 * 3600 * 1000))
  }
  return weekString
}

/*
  获取上周的星期
  num: 获取上周几，默认为上周的的今天
*/
export function lastWeekDay (num) {
  let now = new Date()
  let s = now.getTime()
  let day = now.getDay()
  !num && (num = day)
  let dif = num - day - 7
  var t = new xdate(s + dif * 3600 * 24 * 1000)
  return t.toString('yyyy-MM-dd')
}

/*
  毫秒装换成小时或者天
  millisecond 毫秒
  type 类型，h表示小时，d表示天 默认为h
*/
export function millisecondFormatter (millisecond = 0, type = 'h') {
  let seconds = Math.floor(millisecond / 1000)
  let d = h = m = s = 0
  if (type === 'h') {
    h = Math.floor(seconds / 3600)
    m = Math.floor(seconds % 3600 / 60)
    s = Math.floor(seconds % 60)
  } else if (type === 'd') {
    d = Math.floor(seconds / (3600 * 24))
    h = Math.floor(seconds % (3600 * 24) / 3600)
    m = Math.floor(seconds % 3600 / 60)
    s = Math.floor(seconds % 60)
  }

  return {d, h, m, s}
}

/*
日期格式
*/
export function dateToString (date) {
  !date && (date = new Date())
  var t = new xdate(date)
  return t.toString('yyyy-MM-dd')
}

/*
克隆对象
*/
export function clone (obj) {
  // Handle the 3 simple types, and null or undefined
  if (obj === null || typeof obj !== 'object') return obj

  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    var copy = []
    for (var i = 0, len = obj.length; i < len; ++i) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    var copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
    }
    return copy
  }
  throw new Error("Unable to copy obj! Its type isn't supported.")
}

/*
  获取url参数
  url url地址
*/
export function getUrlParams (url) {
  let paramsString = url.split('?')[1]
  let paramsArr = paramsString.split('&')
  let params = {}
  paramsArr.forEach(item => {
    let keyVal = item.split('=')
    params[keyVal[0]] = keyVal[1]
  })
  return params
}
/*
  将对象装换成url参数
  params: 要被转换的对象
*/
export function toUrlParams (params) {
  let keys = Object.keys(params)
  let paramsArr = []
  for (let key of keys) {
    paramsArr.push(`${key}=${params[key]}`)
  }
  return paramsArr.join('&')
}

/*
  分配份数
  total 总是
  base 要分成几份
  8份分成3份 为 3 3 2
*/
export function distribution (total, base) {
  let int = Math.floor(total / base)
  let arr = []
  for (var a = 0; a < base; a++) {
    arr.push(int)
  }
  for (var a = 0, l = total - int * base; a < l; a++) {
    arr[a]++
  }
  return arr
}
export function refIsExist (name, timeout = 3000) {
  return new Promise((resolve, reject) => {
    var raf = ''
    const fn = () => {
      raf = requestAnimationFrame(() => {
        if (this.$refs[name]) {
          clearTimeout(timer)
          cancelAnimationFrame(raf)
          resolve(true)
        } else {
          fn()
        }
      })
    }
    fn()
    // 取消查询
    var timer = setTimeout(() => {
      cancelAnimationFrame(raf)
      reject(new Error('没找到dom'))
    }, timeout)
  })
}


export function telHide (tel) {
  tel = String(tel)
  return tel.replace(tel.substring(3, 7), '****')
}

export default {
  debounce,
  getEleDistance,
  arrValSame,
  lately,
  getRight,
  dateToString,
  clone,
  millisecondFormatter,
  getUrlParams,
  toUrlParams,
  lastWeekDay,
  getWeek,
  distribution,
  refIsExist,
  telHide
}
