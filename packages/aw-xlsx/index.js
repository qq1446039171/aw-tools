import Xlsx from './main/index.js'


const install = function (Vue) {
  Vue.directive(xlsx, Xlsx)
}

export default install
