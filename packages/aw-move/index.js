import Move from './main/index.js'


const install = function (Vue) {
  Vue.directive('move', Move)
}

export default install
