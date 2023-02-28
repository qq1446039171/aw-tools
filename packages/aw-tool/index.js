import Tool from './main/index.js'
import Date from './main/modules/date'
import Down from './main/modules/down'
import Validate from './main/modules/validate'

const install = {
  ...Tool,
  ...Date,
  ...Down,
  ...Validate
}
export default install
