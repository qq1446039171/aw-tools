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
  @method  validatePhone
  @param phone -> 想要验证的手机号
  @example validatePhone('123456789')
  @return  布尔值   return false  
  */
  validatePhone(phone) {
    return /^1[3456789]\d{9}$/.test(phone)
  },

  // 身份证验证
  validateCardId(cardId) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(cardId)
  },

  // 香港身份证验证
  validateCardIdHK(cardId) {
    const reg = /^[A-Z][0-9]{6}(\([0−9A]\)|[0-9A])$/
    return reg.test(cardId)
  },

  // 澳门身份证验证
  validateCardIdMC(cardId) {
    const reg = /^[157][0-9]{6}(\([0−9A]\)|[0-9A])/
    return reg.test(cardId)
  },

  // 台湾身份证验证
  validateCardIdTW(cardId) {
    const reg = /^[A-Z][0-9]{9}$/
    return reg.test(cardId)
  }
}

export default phone
