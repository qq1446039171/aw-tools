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
