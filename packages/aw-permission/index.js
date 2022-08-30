import Permission from './main/index.js'


const install = function (Vue) {
  Vue.directive(permission, Permission)
}

export default install
