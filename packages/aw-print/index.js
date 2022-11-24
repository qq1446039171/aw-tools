import Print from './main/index.js'


const install = function (Vue) {
  Vue.prototype.$print = Print
}

export default install
