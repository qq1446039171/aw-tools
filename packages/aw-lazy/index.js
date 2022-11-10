import Lazy from './main/index.js'


const install = function (Vue) {
  Vue.directive('lazy', Lazy)
}

export default install
