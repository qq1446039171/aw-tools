import Tool from './main/index.js'
import Date from './main/modules/date'
import Down from './main/modules/down'
import Phone from './main/modules/phone'

const install = {
  ...Tool,
  ...Date,
  ...Down,
  ...Phone
}
export default install
