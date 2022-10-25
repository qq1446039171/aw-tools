const date = {
  /**
 日期补零
 @method  addZero
 @param value -> 想补零的日期
 @example addZero(2)   
 @return  String   return '02'
*/
  dateAddZero(value) {
    if (value < 10) {
      return '0' + value
    } else {
      return value
    }
  },

  /**
 获取当月第一天跟最后一天
 @method  getFirstLastDay
 @example getFirstLastDay()  假如本月为10月
 @return  Object   return {10/01,10/31}
*/
getFirstLastDay(){
  var now = new Date()
  var y = now.getFullYear()
  var m = now.getMonth()
  var first = new Date(y,m,1) // 获取当月第一天
  var last = new Date(y,m+1,0) // 获取当月最后一天

  first = first.getMonth()+1+"/"+"0"+first.getDate();
  last = last.getMonth+1+"/"+last.getDate()
  
  return {first,last}

}


  /**
   获取当前日期前几天的日期数组
  @method  getBeforeDateDays
  @param section -> 想获取当前日期的前几天
  @example getBeforeDateDays(2)   当前时间2022-06-21
  @return  Array   return [2022-06-19,2022-06-20]
  */
  getBeforeDateDays(section) {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var dateArr = []
    for (var i = 0; i < section; i++) {
      var dateObj = {}
      var newDate = new Date(year, month - 1, day - i)
      var newYear = newDate.getFullYear()
      var newMonth = newDate.getMonth() + 1
      var newDay = newDate.getDate()

      dateObj.year = newYear
      dateObj.month = this.addZero(newMonth)
      dateObj.day = this.addZero(newDay)
      let afterFormat = ''
      if (section == 30) {
        afterFormat = `${dateObj.month}-${dateObj.day}`
      } else {
        afterFormat = `${dateObj.year}-${dateObj.month}-${dateObj.day}`
      }
      dateArr.push(afterFormat)
    }

    //  数组反转
    dateArr.reverse()
    return dateArr
  }
}

export default date
