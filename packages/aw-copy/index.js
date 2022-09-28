import Copy from './main/index.js'


const install = function (Vue) {
  Vue.directive(copy, Copy)
}

export default install
