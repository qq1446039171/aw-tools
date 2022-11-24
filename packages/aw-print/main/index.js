// const print = {

// }

// export default print
import Print from 'print-js'
export default function print({
  printable,
  documentTitle,
  type,
  maxWidth,
  onPrintDialogClose = () => {
    console.log('打印结束了')
  }
} = {}) {
  Print({ printable, header: documentTitle, type, maxWidth, onPrintDialogClose })
}
