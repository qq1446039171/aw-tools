const tool = {
  demo() {
    console.log('demo打印的')
  },

  /**
   金额千分位格式化
  @method  mobileReg
  @param value -> 想要格式化的金额
  @example formatMoney('123456789')   
  @return  String   return '123,456,789'    123456789.123 => 123,456,789.123
  */
  formatMoney(money) {
    return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')
  },

  /**
   字符串去空格
  @method  trim
  */
  trim(str) {
    return str.replace(/^\s+|\s+$/g, '')
  },

  /**
   生成随机数字符串
  @method  random
  */
  random() {
    let num = Math.random() + new Date()
    return num.toString(16).replace('.', '')
  },

  /**
   数组转为tree型结构
  @method  arrToTree
  // 注  :  list 传来的数组 , value 筛选的条件
  */
  arrToTree(list, value) {
    // 1.定义一个空数组,后续往里面添加树形结构
    const arr = []
    list.forEach((item) => {
      // 2. 筛选满足要求的item
      if (item.pid === value) {
        // 3.筛选所有孩子,即pid与父级id一致的(外循环走一次,里面走完所有)
        const children = arrToTree(list, item.id)
        // 4.父级中有孩子,才能加上children属性
        if (children.length > 0) {
          // 5. 因为需要的树形结构中孩子属性名为children,手动给父级添加一个children属性,并赋值
          item.children = children
        }
        // 6. 把满足要求的一组数据push进去
        arr.push(item)
      }
    })
    // 返回树形结构
    return arr
  }
}

export default tool
