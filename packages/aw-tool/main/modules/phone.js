const phone = {
  /**
   格式化电话号码
  @method  mobileReg
  @param value -> 想要格式化的电话
  @example mobileReg('18379836654')    
  @return  String   return '183-7983-6654'
  */
  mobileReg(value) {
    return value.replace(mobileReg, '-')
  },

  /**
   验证手机号是否合法
  @method  isMobile
  @param mobile -> 想要验证的手机号
  @example isMobile('123456789')
  @return  布尔值   return false  
  */
  isMobile(mobile) {
    return /^1[3456789]\d{9}$/.test(mobile)
  }
}

export default phone
